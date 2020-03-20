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
    font-size: 3rem;
    list-style-type: none;
    padding: 10px 0;

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
  font-size: 3rem;
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
  color: red;
  font-size: 1.6rem;

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
