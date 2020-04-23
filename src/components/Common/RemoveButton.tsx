import React from 'react';
import styled from 'styled-components';

const Removebutton = styled.button`
  position: absolute;
  top: 21px;
  right: 21px;
  width: 40px;
  height: 40px;
  z-index: 1;
  visibility: hidden;
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;

    path {
      fill: ${({ status }: TProps) => (status ? `#e0e0e0` : `#424242`)};
    }
  }
`;

type TProps = {
  status: boolean;
  onClick: () => void;
};

export default function RemoveButton({ status, onClick }: TProps) {
  return (
    <>
      <Removebutton status={status} onClick={onClick}>
        <svg viewBox="0 0 512 512">
          <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm94.273438 320.105469c8.339843 8.34375 8.339843 21.824219 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.34375-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.824219 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.34375 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" />
        </svg>
      </Removebutton>
    </>
  );
}
