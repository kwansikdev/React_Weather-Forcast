import React from 'react';
import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../Theme';

const List = styled.li`
  position: relative;
  background: ${({ status }: TStatus) =>
    status ? darkTheme.listColor : lightTheme.gradient2};
  min-width: 50px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  p {
    color: ${({ current, city, status }: TProps) =>
      status
        ? current === city
          ? `#c495fd`
          : `#eee`
        : current === city
        ? `#eee`
        : `#121212`};
    font-size: 1.8rem;
    font-weight: 700;
    word-break: keep-all;
    word-break: break-word;
    /* color */
  }

  & + & {
    margin-top: 20px;
  }
`;

type TStatus = {
  status: boolean;
  city: string;
  current: string;
};

type TProps = {
  status: boolean;
  city: string;
  current: string;
  onClick: (e: React.MouseEvent<HTMLLIElement>) => void;
};

export default function MenuList({ status, city, current, onClick }: TProps) {
  const selectCity = city.replace(/(\s*)/g, '').toLowerCase();
  const currentCity = current.toLowerCase();
  return (
    <List
      onClick={onClick}
      current={currentCity}
      city={selectCity}
      status={status}
    >
      <p>{city.toUpperCase()}</p>
    </List>
  );
}
