import { useCallback, useState } from 'react';
import * as API from 'services/api';
import { getCoordinates } from 'utils/coordinates';
import { Weather } from 'types';
import toast from 'react-hot-toast';

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

  const loadWeather = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const coordinates = await getCoordinates();

      const data = {
        lat: coordinates.latitude,
        lon: coordinates.longitude
      };

      const response = await API.fetchWeather(data);
      setWeather(response.data);
    } catch (error) {
      const errorMessage =
        typeof error === 'string' ? error : 'Não foi possível obter a sua localização';

      toast.error(errorMessage);

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  return { weather, loading, error, loadWeather };
}
