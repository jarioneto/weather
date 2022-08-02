import { AxiosResponse } from 'axios';
import { WeatherRequest, WeatherResponse } from 'types';
import { WEATHER_APP_ID } from 'config/environment';
import http from './http';

export const fetchWeather = async (
  data: WeatherRequest
): Promise<AxiosResponse<WeatherResponse>> => {
  const params: Record<string, string> = {
    lang: 'pt_br',
    units: 'metric',
    appid: WEATHER_APP_ID,
    lat: String(data.lat),
    lon: String(data.lon)
  };

  const query = new URLSearchParams(params);

  return http.get<WeatherResponse>(
    `https://api.openweathermap.org/data/2.5/weather?${query}`
  );
};
