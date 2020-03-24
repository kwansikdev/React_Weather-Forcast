import React from 'react';
import * as S from './Styled';

export default function SearchSection() {
  console.log(navigator.appName);
  return (
    <>
      <S.SearchSection>
        <S.SearchTitle>search cites</S.SearchTitle>
        <S.SearchForm>
          <S.SearchBox>
            <S.SearchInput placeholder="SEARCH CITY" type="search" />
            {/* <S.SearchAutoList>
              <span>자동완성</span>
            </S.SearchAutoList> */}
          </S.SearchBox>
          <S.SearchButton>
            <img src="/images/search_black.svg" alt="검색버튼" />
          </S.SearchButton>
        </S.SearchForm>
      </S.SearchSection>
    </>
  );
}
