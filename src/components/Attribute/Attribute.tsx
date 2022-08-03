import React from 'react';
import * as S from './styles';

interface AttributeProps {
  label: string;
  text: string;
  icon: React.ReactNode;
}

const Attribute = ({ label, text, icon }: AttributeProps): JSX.Element => {
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

export default Attribute;
