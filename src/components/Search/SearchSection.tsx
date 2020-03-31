import React, { createRef } from 'react';
import * as S from './Styled';

export default function SearchSection() {
  const searchRef: React.RefObject<HTMLInputElement> = createRef();

  function addCity(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(searchRef.current !== null && searchRef.current.value);
  }

  return (
    <>
      <S.SearchSection>
        <S.SearchTitle>search cites</S.SearchTitle>
        <S.SearchForm>
          <S.SearchBox>
            <S.SearchInput
              ref={searchRef}
              placeholder="SEARCH CITY"
              type="search"
            />
            {/* <S.SearchAutoList>
              <span>자동완성</span>
            </S.SearchAutoList> */}
          </S.SearchBox>
          <S.SearchButton onClick={addCity}>
            <img src="/images/search_black.svg" alt="검색버튼" />
          </S.SearchButton>
        </S.SearchForm>
      </S.SearchSection>
    </>
  );
}
