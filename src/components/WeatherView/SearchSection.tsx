import React, { createRef } from 'react';
import * as S from './Styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
      <S.SearchDiv>
        <S.SearchInput
          ref={searchRef}
          placeholder="SEARCH CITY"
          type="search"
          onKeyUp={enter}
          autoFocus
        />
        <S.SearchButton onClick={add}>
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: `2.4rem`, color: `#fff` }}
          />
        </S.SearchButton>
      </S.SearchDiv>
    </>
  );
}
