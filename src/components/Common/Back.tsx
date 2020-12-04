import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

interface TProps {
  onClick?: () => void;
}

interface TSvg {
  status: boolean;
}

const Button = styled.button`
  position: absolute;
  top: 12px;
  right: 40px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export default function Back({ onClick }: TProps) {
  return (
    <Button onClick={onClick}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={{ fontSize: '4rem', color: `#fff` }}
      />
    </Button>
  );
}
