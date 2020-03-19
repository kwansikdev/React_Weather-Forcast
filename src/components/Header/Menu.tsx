import React, { createRef, useState } from 'react';
import * as S from './Styled';

interface Props {
  open: boolean;
  openMenu: () => void;
}

export default function Menu({ open, openMenu }: Props) {
  const [menuSelct, setMenuSelct] = useState({
    home: true,
    add: false,
    lists: false,
  });

  const dimRef: any = createRef();

  const close = (e: React.MouseEvent<HTMLElement>) => {
    if (dimRef.current.contains(e.target)) openMenu();
  };

  const buttonClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    openMenu();
  };

  const clickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  return (
    <>
      <S.Dim ref={dimRef} onClick={close} />
      <S.Menu>
        <S.MenuInfo>
          <S.CloseButton onClick={buttonClose}>
            <img src="/images/close.svg" alt="메뉴닫기" />
          </S.CloseButton>
        </S.MenuInfo>
        <S.MenuLists>
          <S.List>
            <button onClick={clickMenu}>Home</button>
          </S.List>
          <S.List>
            <button onClick={clickMenu}>Add Weather</button>
          </S.List>
          <S.List>
            <button onClick={clickMenu}>Weather Lists</button>
          </S.List>
        </S.MenuLists>
      </S.Menu>
    </>
  );
}
