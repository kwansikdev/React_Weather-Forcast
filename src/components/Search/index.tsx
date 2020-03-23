import React from 'react';
import * as S from './Styled';
import SearchSection from './SearchSection';

export default function Search() {
  return (
    <S.AddDiv>
      <SearchSection />
      <S.ListSection />
    </S.AddDiv>
  );
}
