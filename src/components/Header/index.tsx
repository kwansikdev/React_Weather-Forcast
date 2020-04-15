import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Styled';
import Nav from './Nav';
import CurrentTime from './CurrentTime';

export default function Header() {
  const [toggleStatus, setToggleStatus] = useState(false);

  const toggleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToggleStatus(e.target.checked);
  };

  return (
    <S.Header>
      <S.Logo>
        <Link to="/">
          <img src="/images/k_logo.png" alt="logo" />
          <span>Kmus</span>
        </Link>
      </S.Logo>
      <Nav />
      <CurrentTime />
      <S.ThemeMode>
        <span>Light</span>
        <S.ToggleLabel>
          <input type="checkbox" onChange={toggleSwitch} />
          <S.ToggleBg status={toggleStatus} />
          <S.ToggleCircle status={toggleStatus} />
        </S.ToggleLabel>
        <span>Dark</span>
      </S.ThemeMode>
    </S.Header>
  );
}
