import { useCallback, useState } from 'react';
import * as API from 'services/api';
import { getCoordinates } from 'utils/coordinates';
import { Weather } from 'types';
import toast from 'react-hot-toast';

type Status = 'initial' | 'pending' | 'resolved';

interface UseWeather {
  weather: Weather | null;
  status: Status;
  loadWeather: () => void;
}

export default function useWeather(): UseWeather {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [status, setStatus] = useState<Status>('initial');

  const loadWeather = useCallback(async () => {
    setStatus('pending');

    try {
      const coordinates = await getCoordinates();

      const data = {
        lat: coordinates.latitude,
        lon: coordinates.longitude
      };

      const response = await API.fetchWeather(data);

      setWeather(response.data);
      setStatus('resolved');
    } catch (error) {
      const errorDefault = 'Não foi possível obter a sua localização';
      const errorMessage = typeof error === 'string' ? error : errorDefault;

      toast.error(errorMessage);

      setStatus('initial');
    }
  }, []);

  return { weather, status, loadWeather };
}
