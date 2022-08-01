import React from 'react';
import Logo from 'components/Icons/Logo';
import Weather from 'components/Weather';
import * as S from './styles';

const HomePage = (): JSX.Element => {
  return (
    <S.Layout>
      <S.Header>
        <S.Box>
          <Logo />
          <S.Title>Weather</S.Title>
        </S.Box>
      </S.Header>
      <S.Content>
        <Weather />
      </S.Content>
    </S.Layout>
  );
};

export default HomePage;
