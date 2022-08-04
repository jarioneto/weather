export const getCoordinates = (): Promise<GeolocationCoordinates> => {
  const defaultError = 'Não foi possível obter a sua localização';

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
      const errorMessage = 'O recurso de geocalização não é suportado pelo seu navegador';

      reject(errorMessage);
    }
  });
};
