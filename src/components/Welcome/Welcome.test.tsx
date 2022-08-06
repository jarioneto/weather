import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Welcome from './Welcome';

type WelcomeProps = React.ComponentProps<typeof Welcome>;

const defaultProps: WelcomeProps = {
  onClick: jest.fn(),
  isLoading: false
};

const renderComponent = (props: WelcomeProps = defaultProps) =>
  render(<Welcome {...props} />);

describe('Welcome component', () => {
  test('Should render the component', () => {
    renderComponent();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('heading')).toHaveLength(2);
    expect(screen.getByText(/weather app/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /para obter os dados da sua região conceda o acesso a sua localização/i
      )
    ).toBeInTheDocument();
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
});
