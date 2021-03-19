import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import media from '../../libs/MediaQuery';

interface TProps {
  onClick?: () => void;
}

const Button = styled.button`
  position: absolute;
  top: 50px;
  right: 50px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 4rem;
  color: #fff;

  ${media.mobile`
    top: 20px;
    right: 20px;
    font-size: 3rem;
  `}
`;

export default function Back({ onClick }: TProps) {
  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        // style={{ color: `#fff` }}
      />
    </Button>
  );
}
