import React from 'react';
import styled from 'styled-components';

const Removebutton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  width: 20px;
  height: 20px;
  visibility: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default function RemoveButton() {
  return (
    <>
      <Removebutton>
        <img src="/images/criss-cross.svg" alt="삭제" />
      </Removebutton>
    </>
  );
}
