import { StrictMode } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import http from 'services/http';
import toast from 'react-hot-toast';

import useWeather from './useWeather';

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

describe('useWeather hook', () => {
  test('Should load weather data', async () => {
    axiosMock.onGet(weatherURL).reply(200, mockRequest);

    const { result, waitForNextUpdate } = renderHook(() => useWeather(), {
      wrapper: StrictMode
    });

    act(() => {
      result.current.loadWeather();
    });

    await waitForNextUpdate();

    expect(result.current.weather).toEqual(mockRequest);
  });

  test('Should load weather with error', async () => {
    axiosMock.onGet(weatherURL).reply(401, { message: 'unauthorized' });

    const { result, waitForNextUpdate } = renderHook(() => useWeather());

    act(() => {
      result.current.loadWeather();
    });

    await waitForNextUpdate();

    expect(result.current.weather).toBeNull();
    expect(toast.error).toHaveBeenCalledWith('Não foi possível obter a sua localização');
  });
});
