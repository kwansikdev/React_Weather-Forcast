import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Styled';
import Nav from './Nav';
import CurrentTime from './CurrentTime';
import { useSelector } from 'react-redux';
import { RouteState } from '../../redux/modules/reducer';

type TProps = {
  status: boolean;
  addThemeStatus: (status: boolean) => void;
};

export default function Header({ addThemeStatus, status }: TProps) {
  const [toggleStatus, setToggleStatus] = useState(status);

  const toggleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToggleStatus(e.target.checked);
    addThemeStatus(e.target.checked);
  };

  return (
    <S.Header status={status}>
      <S.Logo>
        <Link to="/">
          <img src="/images/k_logo.png" alt="logo" />
          <span>WEACAST</span>
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
