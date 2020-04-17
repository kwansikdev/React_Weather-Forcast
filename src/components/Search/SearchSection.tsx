import React, { createRef, useState } from 'react';
import * as S from './Styled';

interface TProps {
  status: boolean;
  addCity: (city: string) => void;
  addFiveDaysWeather: (city: string) => void;
}

export default function SearchSection({
  addCity,
  addFiveDaysWeather,
  status,
}: TProps) {
  const searchRef: React.RefObject<HTMLInputElement> = createRef();

  function add(e: React.MouseEvent<HTMLButtonElement>) {
    if (!searchRef.current) return;
    const cityName = searchRef.current.value;
    searchRef.current.value = '';
    searchRef.current.focus();

    addCity(cityName);
    addFiveDaysWeather(cityName);
  }

  function enter({ keyCode, target }: React.KeyboardEvent<HTMLInputElement>) {
    const _target = target as HTMLInputElement;

    if (keyCode !== 13 || _target.value === '' || _target.value === null)
      return;
    addCity(_target.value);
    addFiveDaysWeather(_target.value);
    _target.value = '';
  }
  console.log(status);
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
