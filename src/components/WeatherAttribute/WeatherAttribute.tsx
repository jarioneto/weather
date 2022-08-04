import React from 'react';
import * as S from './styles';

interface WeatherAttributeProps {
  label: string;
  text: string;
  icon: React.ReactNode;
}

const WeatherAttribute = ({ label, text, icon }: WeatherAttributeProps): JSX.Element => {
  return (
    <S.Container>
      {icon}
      <S.Content>
        <S.Text>{text}</S.Text>
        <S.Label>{label}</S.Label>
      </S.Content>
    </S.Container>
  );
};

export default WeatherAttribute;
