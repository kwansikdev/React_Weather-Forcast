import React from 'react';
import * as S from './Styled';
import SearchSection from './SearchSection';
import ListsSection from './ListsSection';

export default function Search() {
  return (
    <S.AddDiv>
      <SearchSection />
      <ListsSection />
    </S.AddDiv>
  );
}
