import React, { useState } from 'react';
import * as S from './Styled';
import Menu from './Menu';
import ModalPortal from '../Popup/ModalPotal';
import HamburgerMenu from '../Common/HambugerMenu';

export default function Nav() {
  const [open, isOpen] = useState(false);
  const [menuSelct, setMenuSelect] = useState({
    home: true,
    add: false,
    lists: false,
  });

  const openMenu = () => {
    isOpen(!open);
  };

  return (
    <>
      <S.NavButton onClick={openMenu}>
        <HamburgerMenu />
      </S.NavButton>
      {open && (
        <ModalPortal>
          <Menu
            open={open}
            openMenu={openMenu}
            menuSelct={menuSelct}
            setMenuSelect={setMenuSelect}
          />
        </ModalPortal>
      )}
    </>
  );
}
