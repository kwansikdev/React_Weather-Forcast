import React from 'react';
import * as S from './Styled';

export default function Search() {
  return (
    <S.AddDiv>
      <S.SearchSection>
        <S.SearchInput type="search" />
        <S.SearchAutoList>
          <span>자동완성</span>
        </S.SearchAutoList>
      </S.SearchSection>
      <S.ListSection>
        <div>리스트</div>
      </S.ListSection>
    </S.AddDiv>
  );
}
