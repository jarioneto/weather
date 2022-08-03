import React, { useState } from 'react';
import Logo from 'components/Icons/Logo';
import Welcome from 'components/Welcome';
import Weather from 'components/Weather';

import * as S from './styles';
import useWeather from 'hooks/useWeather';

type ComponentName = 'welcome' | 'weather';

const HomePage = (): JSX.Element => {
  const [componentName, setComponentName] = useState<ComponentName>('welcome');
  const { loading, loadWeather, weather } = useWeather();

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
