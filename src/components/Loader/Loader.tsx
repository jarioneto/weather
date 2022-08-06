import React from 'react';

import * as S from './styles';

/* -------------------------------------------------------------------------------------------------
 * Loader
 * -----------------------------------------------------------------------------------------------*/

const Loader = (): JSX.Element => {
  return (
    <S.Spin role="progressbar">
      <div />
      <div />
      <div />
      <div />
    </S.Spin>
  );
};

/* -------------------------------------------------------------------------------------------------
 * SectionLoader
 * -----------------------------------------------------------------------------------------------*/

export const SectionLoader = (): JSX.Element => (
  <S.Container>
    <Loader />
  </S.Container>
);

export default Loader;
