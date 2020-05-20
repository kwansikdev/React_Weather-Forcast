import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../Theme';

const Svg = styled.svg`
  width: 75px;
  height: 75px;
  cursor: pointer;

  path {
    fill: ${({ status, location }: TProps) =>
      location === 'home'
        ? status
          ? `#757575`
          : `#6867ab`
        : location === 'detail'
        ? status
          ? darkTheme.gradient
          : '#6867ab'
        : ``};
  }
`;

type TProps = {
  status: boolean;
  location: string;
  onClick?: () => void;
};

export default function PlusButton({ status, onClick, location }: TProps) {
  return (
    <Svg
      enableBackground="new 0 0 515.556 515.556"
      viewBox="0 0 515.556 515.556"
      status={status}
      location={location}
      onClick={onClick}
    >
      <path d="m257.778 0c-142.137 0-257.778 115.641-257.778 257.778s115.641 257.778 257.778 257.778 257.778-115.641 257.778-257.778-115.642-257.778-257.778-257.778zm128.889 290h-96.667v96.667h-64.444v-96.667h-96.667v-64.444h96.667v-96.667h64.444v96.667h96.667z" />
    </Svg>
  );
}
