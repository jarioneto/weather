import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import http from 'services/http';
import toast from 'react-hot-toast';

import Home from './Home';

const axiosMock = new MockAdapter(http);

const mockGetCoordinates = jest.fn().mockImplementation(async () => ({
  latitude: -10.9354,
  longitude: -37.0713
}));

jest.mock('utils/coordinates', () => ({
  getCoordinates: () => mockGetCoordinates()
}));

jest.mock('react-hot-toast');

const weatherURL =
  'https://api.openweathermap.org/data/2.5/weather?lang=pt_br&units=metric&appid=&lat=-10.9354&lon=-37.0713';

const mockRequest = {
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
};

const renderComponent = () => render(<Home />);

describe('Home component', () => {
  test('Should render the component', () => {
    renderComponent();

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('heading')).toHaveLength(3);
    expect(screen.getByText(/weather app/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /para obter os dados da sua região conceda o acesso a sua localização/i
      )
    ).toBeInTheDocument();
  });

  test('Should get weather', async () => {
    axiosMock.onGet(weatherURL).reply(200, mockRequest);

    act(() => {
      renderComponent();
    });

    const button = screen.getByRole('button');

    act(() => {
      userEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /carregando/i })).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/algumas nuvens/i)).toBeInTheDocument();
      expect(screen.getByText(/aracaju, br/i)).toBeInTheDocument();
    });
  });

  test('Should get weather with error', async () => {
    axiosMock.onGet(weatherURL).reply(401, { message: 'unauthorized' });

    act(() => {
      renderComponent();
    });

    const button = screen.getByRole('button');

    act(() => {
      userEvent.click(button);
    });

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /carregando/i })).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        'Não foi possível obter a sua localização'
      );
    });
  });

  test('Should get location with error', async () => {
    axiosMock.onGet(weatherURL).reply(200, mockRequest);

    mockGetCoordinates.mockRejectedValue(
      'Permissão negada! Não foi possível obter a sua localização'
    );

    renderComponent();

    const button = screen.getByRole('button');

    act(() => {
      userEvent.click(button);
    });

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith(
        'Permissão negada! Não foi possível obter a sua localização'
      );
    });
  });
});
