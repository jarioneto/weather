export type WeatherCoordinates = {
  lon: number;
  lat: number;
};

export type WeatherData = {
  id: number;
  description: string;
  icon: string;
};

export type WeatherWind = {
  speed: number;
  deg: number;
};

export type WeatherMain = {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
};

export type WeatherSystem = {
  id: number;
  country: string;
};

export interface Weather {
  id: number;
  name: string;
  coord: WeatherCoordinates;
  weather: Array<WeatherData>;
  main: WeatherMain;
  wind: WeatherWind;
  sys: WeatherSystem;
}

export type WeatherRequest = WeatherCoordinates;
export type WeatherResponse = Weather;
