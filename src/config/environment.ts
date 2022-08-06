const isJestWorker = process.env.NODE_ENV === 'test';
export const WEATHER_APP_ID = isJestWorker ? '' : process.env.WEATHER_APP_ID ?? '';
