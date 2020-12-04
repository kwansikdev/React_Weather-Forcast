import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import media from '../../libs/MediaQuery';

const Removebutton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;

  ${media.mobile`
    top: 15px;
    right: 15px;
  `}
`;

type TProps = {
  size: string;
  where: string;
  onClick: () => void;
};

export default function RemoveButton({ size, where, onClick }: TProps) {
  return (
    <>
      <Removebutton onClick={onClick}>
        <FontAwesomeIcon
          icon={faTimes}
          style={{ fontSize: `${size}px`, color: '#fff' }}
        />
      </Removebutton>
    </>
  );
}
