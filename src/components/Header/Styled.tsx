import styled, { css, keyframes } from 'styled-components';
import { darkTheme, lightTheme } from '../../Theme';

type TStatus = {
  status: boolean;
};

export const Header = styled.header`
  background: ${({ status }: TStatus) =>
    status ? darkTheme.header : lightTheme.header};
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 10px 20px;

  a {
    display: block;
  }

  span {
    color: ${({ status }: TStatus) =>
      status ? lightTheme.header : darkTheme.header};
  }
`;

// Logo
export const Logo = styled.h1`
  position: absolute;
  top: 15px;
  left: 70px;
  a {
    display: inline-block;
  }

  img {
    width: 26px;
  }

  span {
    display: inline-block;
    font-size: 2.6rem;
    line-height: 1;
    letter-spacing: 5px;
  }

  img + span {
    margin-left: 10px;
  }
`;

// Nav
export const NavButton = styled.button`
  background: transparent;
  border: 0;
`;

const openMenu = keyframes`
  from {
    transform: translateX(-300px)
  }
  to {
    transform: translateX(0)
  }
`;

const closeMenu = keyframes`
  from {
    transform: translateX(0)
  }
  to {
    transform: translateX(-300px)
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
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
  open: boolean;
}

export const Dim = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${({ open }: MenuProps) =>
    open
      ? css`
          animation-name: ${fadeIn};
        `
      : css`
          animation-name: ${fadeOut};
        `}
`;

export const Menu = styled.div`
  position: absolute;
  width: 350px;
  height: 100vh;
  background: #fff;
  top: 0;
  left: 0;
  padding: 10px;
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  ${({ open }: MenuProps) =>
    open
      ? css`
          animation-name: ${openMenu};
        `
      : css`
          animation-name: ${closeMenu};
        `}
`;

export const MenuInfo = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #222;

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

  img {
    height: 35px;
  }
`;

export const MenuLists = styled.ul`
  padding: 10px;

  li {
    position: relative;
    margin-left: 50px;
    padding: 20px 0;
    font-size: 1.6rem;

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 2px;
      background: #222;
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
  color: #4d47ff;
  font-size: 1.8rem;
  font-weight: 700;

  p {
    display: inline-block;
    line-height: 2.1;
  }

  p + p {
    margin-left: 10px;
  }
`;

export const Data = styled.p``;

export const Day = styled.p``;

// Light-Dark Mode
export const ThemeMode = styled.div`
  display: flex;
  position: relative;
  font-size: 1.6rem;
  line-height: 2.2;

  span + label {
    margin-left: 5px;
  }

  label + span {
    margin-left: 5px;
  }
`;

export const ToggleLabel = styled.label`
  position: relative;
  width: 44px;
  cursor: pointer;

  input {
    position: relative;
    -webkit-appearance: none;
    -moz-appearance: none;
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
  background-color: rgba(0, 0, 0, 0.5);
  display: inline-block;
  transition: background-color 300ms linear;

  ${({ status }: toggleProps) =>
    status &&
    css`
      background-color: #ff0070;
    `}
`;

export const ToggleCircle = styled.div`
  height: 20px;
  width: 20px;
  background-color: #2b244d;
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
`;
