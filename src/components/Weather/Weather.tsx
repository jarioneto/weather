import Button from 'components/Button';
import React from 'react';
import * as S from './styles';

const Weather = (): JSX.Element => {
  return (
    <S.Container>
      <S.Title>
        Bem-vindo ao <span>Wheather App</span>
      </S.Title>
      <Button>Consultar previsão</Button>
      <S.Divider />
      <S.Info>
        <S.Text>
          Para obter os dados da sua região conceda o acesso a sua localização.
        </S.Text>
      </S.Info>
    </S.Container>
  );
};

export default Weather;
