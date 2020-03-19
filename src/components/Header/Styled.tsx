import styled, { css, keyframes } from 'styled-components';

export const Header = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 10px 20px;

  a {
    display: block;
  }
`;

// Logo
export const Logo = styled.h1`
  position: absolute;
  top: 0;
  left: 70px;
`;

// Nav
export const NavButton = styled.button`
  background: transparent;
  border: 0;

  img {
    width: 35px;
  }
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
  } to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  } to {
    opacity: 0;
  }
`;

// Menu
// interface MenuProps {
//   close: boolean;
// }

export const Dim = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

export const Menu = styled.div`
  position: absolute;
  width: 300px;
  height: 100vh;
  background: #fff;
  top: 0;
  left: 0;
  padding: 10px;

  animation-duration: 0.3s;
  animation-timing-function: ease-out;
  animation-name: ${openMenu};
  animation-fill-mode: forwards;
`;

export const MenuInfo = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #222;
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

  li:first-child {
    border-bottom: 1px solid #222;
    button {
      color: red;
    }
  }
`;

export const List = styled.li`
  width: 100%;
  list-style-type: none;

  button {
    font-size: 4rem;
    background: transparent;
    border: 0;
    cursor: pointer;
  }

  & + & {
    margin-top: 20px;
  }
`;

// CutrrnetTime
export const CurrentTime = styled.div`
  color: red;
  font-size: 2rem;

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
export const ThemeMode = styled.div``;

export const ToggleInput = styled.input``;
