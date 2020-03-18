import React, { useState } from 'react';
import * as S from './Styled';
import Menu from './Menu';
import ModalPortal from '../Popup/ModalPotal';

export default function Nav() {
  const [open, isOpen] = useState(false);

  const openMenu = () => {
    isOpen(!open);
  };

  return (
    <>
      <S.NavButton onClick={openMenu}>
        <img src="/images/hamburger-menu.svg" alt="logo" />
      </S.NavButton>
      {open && (
        <ModalPortal>
          <Menu open={open} openMenu={openMenu} />
        </ModalPortal>
      )}
    </>
  );
}
