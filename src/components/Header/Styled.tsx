import styled, { css, keyframes } from 'styled-components';
import { darkTheme, lightTheme } from '../../Theme';
import media from '../../libs/MediaQuery';

type TStatus = {
  status: boolean;
};

export const Header = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 10px 40px;
`;

// Logo
export const Logo = styled.h1`
  margin-top: -10px;
  padding: 50px 5px 2px 5px;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  font-size: 1.6rem;
  color: #fff;

  ${media.tablet`

  `};

  ${media.mobile`
    top: 17px;
    left: calc(50% - 66px);

    img {
      width: 20px;
    }

    span {
      font-size: 1.6rem;
    }
  `}
`;

// Nav
export const NavButton = styled.button`
  background: transparent;
  border: 0;
`;

const openMenu = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
  `;

const closeMenu = keyframes`
  from {
    opacity: 1;
    transform: translateX(0)
  } to {
    opacity: 0;
    transform: translateX(-100%)
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Menu
interface MenuProps {
  status?: boolean;
  open: boolean;
}

export const Dim = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${({ open }: MenuProps) =>
    open &&
    css`
      animation-name: ${fadeOut};
    `};

  animation-name: ${fadeIn};
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

export const Menu = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background: ${({ status }: MenuProps) =>
    status ? darkTheme.header : '#fff'};
  top: 0;
  left: 0;
  padding: 10px;
  animation-name: ${openMenu};
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${({ open }: MenuProps) =>
    open &&
    css`
      animation-name: ${closeMenu};
    `}

  p {
    color: ${({ status }: MenuProps) => (status ? '#fff' : `#121212`)};
  }

  ${media.desktop`
    width: 350px;
  `}
`;

export const MenuInfo = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid
    ${({ status }: TStatus) => (status ? '#5e5e5e' : '#222')};

  p {
    font-size: 3rem;
    line-height: 4;
    text-align: center;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: 0;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

export const MenuLists = styled.ul`
  padding: 10px;

  li {
    position: relative;
    margin-left: 50px;
    padding: 20px 0;
    font-size: 1.6rem;
    color: ${({ status }: TStatus) => (status ? '#fff' : `#121212`)};

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 2px;
      background: ${({ status }: TStatus) => (status ? '#5e5e5e' : '#222')};
      opacity: 0;
      transform: scaleX(0);
      transition: all 0.3s;
    }

    &:hover {
      color: red;
      transition: all 0.3s;

      &:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  li + li {
    margin-top: 10px;
  }
`;

interface ListButtonProps {
  status: boolean;
}

export const ListButton = styled.button`
  width: 100%;
  font-size: 1.6rem;
  background: transparent;
  border: 0;
  cursor: pointer;
  text-align: left;

  ${({ status }: ListButtonProps) =>
    status &&
    css`
      color: blue;
    `}
`;

// CutrrnetTime
export const CurrentTime = styled.div`
  /* position: absolute;
  top: 7px;
  left: 43%; */
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;

  p {
    display: inline-block;
    /* line-height: 2.3; */
    /* color: ${({ status }: TStatus) => status && lightTheme.header}; */
  }

  p + p {
    margin-left: 10px;
  }

  ${media.mobile`
    visibility: hidden;
  `}
`;

export const Data = styled.p``;

export const Day = styled.p``;

// Light-Dark Mode
export const ThemeMode = styled.div`
  display: flex;
  position: relative;
  font-size: 1.6rem;

  svg + label {
    margin-left: 5px;
  }

  label + svg {
    margin-left: 5px;
  }

  ${media.tablet`
    font-size: 1.6rem;
  `}

  ${media.mobile`
    font-size: 1.4rem;

    span {
      display: none;
    }
  `}
`;

export const ToggleLabel = styled.label`
  position: relative;
  width: 44px;
  margin-top: -10px;
  cursor: pointer;

  input {
    position: relative;
    visibility: hidden;
    border: 0;
  }
`;

interface toggleProps {
  status: boolean;
}

export const ToggleBg = styled.div`
  position: absolute;
  top: 11px;
  left: 6px;
  height: 14px;
  width: 32px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.6);
  display: inline-block;
  transition: background-color 300ms linear;

  ${({ status }: toggleProps) =>
    status &&
    css`
      background-color: rgba(255, 255, 255, 0.6);
    `}

  ${media.mobile`
    top: 8px;
  `};
`;

export const ToggleCircle = styled.div`
  height: 20px;
  width: 20px;
  background-color: rgba(255, 255, 255);
  position: absolute;
  top: 8px;
  border-radius: 50%;
  box-shadow: 0 0 0 rgba(0, 0, 255, 0.5);
  transition: left 300ms linear;
  left: 1px;

  ${({ status }: toggleProps) =>
    status &&
    css`
      background-color: white;
      left: 24px;
    `}

  ${media.mobile`
    top: 5px;
  `};
`;
