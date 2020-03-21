import React, { createRef } from 'react';
import * as S from './Styled';
import { withRouter, RouteComponentProps } from 'react-router';

type Props = {
  open: boolean;
  openMenu: () => void;
  menuSelct: {
    home: boolean;
    add: boolean;
    lists: boolean;
  };
  setMenuSelect: React.Dispatch<
    React.SetStateAction<{
      home: boolean;
      add: boolean;
      lists: boolean;
    }>
  >;
};

type RouteComponent = RouteComponentProps & Props;

const Menu: React.FC<RouteComponent> = ({
  open,
  openMenu,
  menuSelct,
  setMenuSelect,
  history,
}) => {
  const dimRef: any = createRef();

  const close = (e: React.MouseEvent<HTMLElement>) => {
    if (dimRef.current.contains(e.target)) openMenu();
  };

  const buttonClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    openMenu();
  };

  const clickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const selectMenu: string = e.currentTarget.children[0].innerHTML;

    if (selectMenu)
      setMenuSelect({
        home: selectMenu === 'Home' ? true : false,
        add: selectMenu === 'Add Weather' ? true : false,
        lists: selectMenu === 'Weather Lists' ? true : false,
      });

    if (selectMenu === 'Home') history.push('/');
    else if (selectMenu === 'Add Weather') history.push('/weathers/add');
    if (selectMenu === 'Weather Lists') history.push('/weathers/view');
  };

  return (
    <>
      <S.Dim ref={dimRef} open={open} onClick={close} />
      <S.Menu open={open}>
        <S.MenuInfo>
          <S.CloseButton onClick={buttonClose}>
            <img src="/images/close.svg" alt="메뉴닫기" />
          </S.CloseButton>
          <p>Welcome !</p>
        </S.MenuInfo>
        <S.MenuLists>
          <li>
            <S.ListButton status={menuSelct.home} onClick={clickMenu}>
              <span>Home</span>
            </S.ListButton>
          </li>
          <li>
            <S.ListButton status={menuSelct.add} onClick={clickMenu}>
              <span>Add Weather</span>
            </S.ListButton>
          </li>
          <li>
            <S.ListButton status={menuSelct.lists} onClick={clickMenu}>
              <span>Weather Lists</span>
            </S.ListButton>
          </li>
        </S.MenuLists>
      </S.Menu>
    </>
  );
};

export default withRouter(Menu);
