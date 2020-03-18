import styled, { css } from 'styled-components';

export const Header = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0 20px;

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
  width: 30px;
  height: auto;
  background: transparent;
  border: none;
`;

export const Dim = styled.div`
  position: absolute;
  /* width: 200px; */
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Menu = styled.div`
  position: absolute;
  background: blue;
  width: 250px;
  height: 100vh;
  top: 0;
  left: 0;
`;

// CutrrnetTime
export const CurrentTime = styled.p`
  color: red;
`;

// Light-Dark Mode
export const ThemeMode = styled.div``;

export const ToggleInput = styled.input``;
