import React, { useState } from 'react';
import * as S from './Styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
    <S.Header>
      <S.Logo>
        <Link to="/">WEACAST</Link>
      </S.Logo>
      <S.ThemeMode>
        <FontAwesomeIcon
          icon={faSun}
          style={{ fontSize: '2rem', color: `#fff` }}
        />
        <S.ToggleLabel>
          <input type="checkbox" onChange={toggleSwitch} />
          <S.ToggleBg status={toggleStatus} />
          <S.ToggleCircle status={toggleStatus} />
        </S.ToggleLabel>
        <FontAwesomeIcon
          icon={faMoon}
          style={{ fontSize: '2rem', color: `#fff` }}
        />
      </S.ThemeMode>
    </S.Header>
  );
}
