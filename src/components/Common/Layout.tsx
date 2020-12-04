import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import HeaderContainer from '../../container/HeaderContainer';
import { RootState } from '../../redux/modules/reducer';

type TLayoutProps = {
  children: React.ReactNode;
};

type TStyledBg = {
  status: boolean;
};

const StyledBg = styled.div`
  background-image: ${({ status }: TStyledBg) =>
    status
      ? `url('/images/night-mode-bg.jpg')`
      : `url('/images/light-mode-bg.jpg');`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  padding: 0 50px;
  overflow: hidden;
`;

export default function Layout({ children }: TLayoutProps) {
  const status = useSelector((state: RootState) => state.common.status);

  return (
    <StyledBg status={status}>
      <HeaderContainer />
      {children}
    </StyledBg>
  );
}
