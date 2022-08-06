import React from 'react';
import Logo from 'components/Icons/Logo';
import Welcome from 'components/Welcome';
import Weather from 'components/Weather';
import useWeather from 'hooks/useWeather';

import * as S from './styles';

const Home = (): JSX.Element => {
  const { status, loadWeather, weather } = useWeather();

  const isLoading = status === 'pending';

  return (
    <S.Layout>
      <S.Header>
        <S.Box>
          <Logo />
          <S.Title>Weather</S.Title>
        </S.Box>
      </S.Header>
      <S.Content>
        {status === 'initial' ? (
          <Welcome isLoading={isLoading} onClick={loadWeather} />
        ) : (
          <Weather isLoading={isLoading} weather={weather} onClick={loadWeather} />
        )}
      </S.Content>
    </S.Layout>
  );
};

export default Home;
