import Button from 'components/Button';
import React from 'react';
import * as S from './styles';

interface WelcomeProps {
  onClick: () => void;
}

const Welcome = ({ onClick }: WelcomeProps): JSX.Element => {
  return (
    <S.Container>
      <S.Title>
        Bem-vindo ao <span>Weather App</span>
      </S.Title>
      <Button onClick={onClick}>Consultar previsão</Button>
      <S.Divider />
      <S.Info>
        <S.Text>
          Para obter os dados da sua região conceda o acesso a sua localização.
        </S.Text>
      </S.Info>
    </S.Container>
  );
};

export default Welcome;
