import React from 'react';
import * as S from './Styled';
import SearchSectionContainer from '../../container/SearchSectionContainer';
import ListsSectionContainer from '../../container/ListsSectionContainer';

export default function Search() {
  return (
    <S.AddDiv>
      <SearchSectionContainer />
      <ListsSectionContainer />
    </S.AddDiv>
  );
}
