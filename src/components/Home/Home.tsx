import React, { useEffect, useState } from 'react';
import Logo from 'components/Icons/Logo';
import Welcome from 'components/Welcome';
import Weather from 'components/Weather';
import useWeather from 'hooks/useWeather';

import * as S from './styles';

type ComponentName = 'welcome' | 'weather';

const HomePage = (): JSX.Element => {
  const [componentName, setComponentName] = useState<ComponentName>('welcome');
  const { loading, loadWeather, weather, error } = useWeather();

  useEffect(() => {
    error && setComponentName('welcome');
  }, [error]);

  const handleLoadWeather = () => {
    loadWeather();
    setComponentName('weather');
  };

  const components = {
    welcome: () => <Welcome onClick={handleLoadWeather} />,
    weather: () => (
      <Weather isLoading={loading} weather={weather} onClick={handleLoadWeather} />
    )
  };

  const Component = components[componentName];

  return (
    <S.Layout>
      <S.Header>
        <S.Box>
          <Logo />
          <S.Title>Weather</S.Title>
        </S.Box>
      </S.Header>
      <S.Content>
        <Component />
      </S.Content>
    </S.Layout>
  );
};

export default HomePage;
