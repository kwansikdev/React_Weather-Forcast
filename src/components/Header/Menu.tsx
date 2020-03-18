import React, { createRef } from 'react';
import * as S from './Styled';

interface Props {
  open: boolean;
  openMenu: () => void;
}

export default function Menu({ openMenu }: Props) {
  const dimRef: any = createRef();

  const close = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dimRef.current.contains(e.target)) openMenu();
  };

  return (
    <>
      <S.Dim ref={dimRef} onClick={close} />
      <S.Menu>메뉴</S.Menu>
    </>
  );
}
