import { useCallback, useState } from 'react';
import * as API from 'services/api';
import { Weather } from 'types';

interface UseFetchAccounts {
  weather: Weather | null;
  loading: boolean;
  error: string | null;
  loadWeather: () => void;
}

export default function useFetchAccounts(): UseFetchAccounts {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const defaultError = 'Não foi possível obter a sua localização';

  const getCoordinates = (): Promise<GeolocationCoordinates> => {
    return new Promise((resolve, reject) => {
      const callbackSucess = (position: GeolocationPosition) => {
        resolve(position.coords);
      };

      const callbackError = (positionError: GeolocationPositionError) => {
        const errorMessage =
          positionError.code === GeolocationPositionError.PERMISSION_DENIED
            ? `Permissão negada! ${defaultError}`
            : defaultError;

        reject(errorMessage);
      };

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callbackSucess, callbackError);
      } else {
        const errorMessage =
          'O recurso de geocalização não é suportado pelo seu navegador';

        reject(errorMessage);
      }
    });
  };

  const loadWeather = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const coordinates = await getCoordinates();

      const data = {
        lat: coordinates.latitude,
        lon: coordinates.longitude
      };

      API.fetchWeather(data)
        .then(({ data }) => {
          setWeather(data);
        })
        .catch(() => {
          setError(defaultError);
        });
    } catch (error) {
      setError(error as string);
    } finally {
      setLoading(false);
    }
  }, []);

  return { weather, loading, error, loadWeather };
}
