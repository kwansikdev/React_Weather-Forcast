import React from 'react';
import * as S from './Styled';
import SearchSectionContainer from '../../container/SearchSectionContainer';
import ListsSection from './ListsSection';

export default function Search() {
  return (
    <S.AddDiv>
      <SearchSectionContainer />
      <ListsSection />
    </S.AddDiv>
  );
}
