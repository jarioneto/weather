import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Weather from './Weather';

type WeatherProps = React.ComponentProps<typeof Weather>;

const defaultProps: WeatherProps = {
  isLoading: false,
  weather: {
    id: 200,
    name: 'Aracaju',
    wind: {
      speed: 4.12,
      deg: 130
    },
    sys: {
      id: 150,
      country: 'BR'
    },
    coord: {
      lat: -10.9354,
      lon: -37.0713
    },
    main: {
      humidity: 94,
      temp: 28,
      temp_max: 30,
      temp_min: 24
    },
    weather: [
      {
        id: 801,
        description: 'algumas nuvens',
        icon: '02n'
      }
    ]
  },
  onClick: jest.fn()
};

const renderComponent = (props: WeatherProps = defaultProps) =>
  render(<Weather {...props} />);

describe('Weather component', () => {
  test('Should render the component', () => {
    renderComponent();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('heading')).toHaveLength(4);
    expect(screen.getByText(/aracaju, br/i)).toBeInTheDocument();
    expect(screen.getByText(/algumas nuvens/i)).toBeInTheDocument();
    expect(screen.getByText(/28/i)).toBeInTheDocument();
    expect(screen.getByText('94%')).toBeInTheDocument();
    expect(screen.getByText('15 km/h')).toBeInTheDocument();
  });

  test('Should fetch weather on click', async () => {
    const props = {
      ...defaultProps,
      onClick: jest.fn()
    };

    renderComponent(props);

    const button = screen.getByRole('button');
    userEvent.click(button);

    await waitFor(() => {
      expect(props.onClick).toHaveBeenCalled();
    });
  });

  test('Should display loading if isLoading is true', () => {
    const props = {
      ...defaultProps,
      isLoading: true
    };

    renderComponent(props);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
