import React, { useState, useEffect } from 'react';
import * as S from './Styled';
import Menu from './Menu';
import ModalPortal from '../Popup/ModalPotal';
import HamburgerMenu from '../Common/HambugerMenu';
import { useSelector } from 'react-redux';
import { RouteState } from '../../redux/modules/reducer';

export default function Nav() {
  const [open, isOpen] = useState(false);
  const [menuSelct, setMenuSelect] = useState({
    home: true,
    add: false,
    lists: false,
  });
  const status = useSelector((state: RouteState) => state.common.status);

  const openMenu = () => {
    isOpen(!open);
  };

  useEffect(() => {
    console.log('open', open);
  }, [open]);

  return (
    <>
      <S.NavButton onClick={openMenu}>
        <HamburgerMenu />
      </S.NavButton>
      {open && (
        <ModalPortal>
          <Menu
            status={status}
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
