import { getCoordinates } from './coordinates';

const mockNavigatorGeolocation = () => {
  const clearWatchMock = jest.fn();
  const getCurrentPositionMock = jest.fn();
  const watchPositionMock = jest.fn();

  const geolocation = {
    clearWatch: clearWatchMock,
    getCurrentPosition: getCurrentPositionMock,
    watchPosition: watchPositionMock
  };

  Object.defineProperty(global.navigator, 'geolocation', {
    value: geolocation
  });

  return { clearWatchMock, getCurrentPositionMock, watchPositionMock };
};

const { getCurrentPositionMock } = mockNavigatorGeolocation();

describe('Coordinates utils', () => {
  beforeEach(() => {
    getCurrentPositionMock.mockReset();
  });

  test('Should get current coordinates', async () => {
    const coordinatesValue = {
      coords: {
        latitude: -100,
        longitude: -354
      }
    };

    getCurrentPositionMock.mockImplementation((success) => success(coordinatesValue));

    const coordinates = await getCoordinates();

    expect(coordinates).toEqual(coordinatesValue.coords);
  });

  test('Should get coordinates with permission denied error', async () => {
    getCurrentPositionMock.mockImplementation((success, reject) =>
      reject({
        code: 1
      })
    );

    getCoordinates().catch((error) => {
      expect(error).toEqual('Permissão negada! Não foi possível obter a sua localização');
    });
  });

  test('Should get coordinates with not support error', async () => {
    getCoordinates().catch((error) => {
      expect(error).toEqual(
        'O recurso de geocalização não é suportado pelo seu navegador'
      );
    });
  });
});
