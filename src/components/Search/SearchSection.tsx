import React, { createRef } from 'react';
import * as S from './Styled';

interface TProps {
  status: boolean;
  addList: (city: string) => void;
  addFiveDaysWeather: (city: string) => void;
}

export default function SearchSection({
  addList,
  addFiveDaysWeather,
  status,
}: TProps) {
  const searchRef: React.RefObject<HTMLInputElement> = createRef();

  function add(e: React.MouseEvent<HTMLButtonElement>) {
    if (!searchRef.current) return;
    const cityName = searchRef.current.value;
    searchRef.current.value = '';
    searchRef.current.focus();

    addFiveDaysWeather(cityName);
    addList(cityName);
  }

  function enter({ keyCode, target }: React.KeyboardEvent<HTMLInputElement>) {
    const _target = target as HTMLInputElement;
    const regexr = /[ㄱ-ㅎㅏ-ㅣ,가-힣]/g;

    if (regexr.test(_target.value)) return (_target.value = '');
    if (keyCode !== 13 || _target.value === '' || _target.value === null)
      return;

    addFiveDaysWeather(_target.value);
    addList(_target.value);
    _target.value = '';
  }

  return (
    <>
      <S.SearchSection status={status}>
        <S.SearchTitle>search cites</S.SearchTitle>
        <S.SearchForm>
          <S.SearchBox>
            <S.SearchInput
              ref={searchRef}
              placeholder="SEARCH CITY"
              type="search"
              onKeyUp={enter}
              autoFocus
            />
            {/* <S.SearchAutoList>
              <span>자동완성</span>
            </S.SearchAutoList> */}
          </S.SearchBox>
          <S.SearchButton onClick={add}>
            <img src="/images/search_black.svg" alt="검색버튼" />
          </S.SearchButton>
        </S.SearchForm>
      </S.SearchSection>
    </>
  );
}
