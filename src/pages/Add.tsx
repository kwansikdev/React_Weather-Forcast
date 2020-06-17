import React from 'react';
import Search from '../components/Search';
import HeaderContainer from '../container/HeaderContainer';
import * as S from './Styled';

export default function Add() {
  return (
    <S.Layout>
      <HeaderContainer />
      <Search />
    </S.Layout>
  );
}
