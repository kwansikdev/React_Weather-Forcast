import React from 'react';
import DetailViewContainer from '../container/DetailViewContainer';
import HeaderContainer from '../container/HeaderContainer';
import * as S from './Styled';

export default function View() {
  return (
    <S.Layout>
      <HeaderContainer />
      <DetailViewContainer />
    </S.Layout>
  );
}
