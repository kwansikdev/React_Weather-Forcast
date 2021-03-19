import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { css } from 'styled-components';
import media from '../../libs/MediaQuery';

type ButtonType = {
  where: string;
};

const Removebutton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;

  ${({ where }: ButtonType) =>
    where === 'search'
      ? css`
          top: 20px;
          right: 20px;
        `
      : css``}

  ${media.mobile`
    top: 15px;
    right: 15px;
  `}
`;

type TProps = {
  size: string;
  where: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function RemoveButton({ size, where, onClick }: TProps) {
  return (
    <>
      <Removebutton onClick={onClick} where={where}>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ fontSize: `${size}px`, color: '#fff' }}
        />
      </Removebutton>
    </>
  );
}
