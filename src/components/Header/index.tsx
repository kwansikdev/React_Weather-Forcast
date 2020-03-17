import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Styled';
import Nav from './Nav';
import CurrentTime from './CurrentTime';

export default function Header() {
  return (
    <S.Header>
      <S.Logo>
        <Link to="/">
          <img src="#" alt="logo" />
        </Link>
      </S.Logo>
      <Nav />
      <CurrentTime />
      <S.ThemeMode>
        Light
        <S.ToggleInput type="checkbox" />
        dark
      </S.ThemeMode>
    </S.Header>
  );
}
