import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../Theme';

const List = styled.li`
  position: relative;
  background: ${({ status }: TStatus) =>
    status
      ? darkTheme.listColor
      : `linear-gradient(to top, #ff8bee 0, #8b70c7 50%, #7081c7 100%)`};
  min-width: 70px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  p {
    color: ${({ current, city }: TProps) =>
      current === city ? `#c495fd` : `#fff`};
    font-size: 1.8rem;
    font-weight: 700;
    word-break: keep-all;
  }

  & + & {
    margin-top: 20px;
  }
`;

type TStatus = {
  status: boolean;
};

type TProps = {
  status: boolean;
  city: string;
  current: string;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
};

export default function MenuList({ status, city, current, onClick }: TProps) {
  return (
    <List onClick={onClick} current={current} city={city} status={status}>
      <p>{city.toUpperCase()}</p>
    </List>
  );
}
