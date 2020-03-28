import React from 'react';
import styled from 'styled-components';

const List = styled.li`
  background: linear-gradient(to top, #ff8bee 0, #8b70c7 50%, #7081c7 100%);
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;

  p {
    color: white;
    font-size: 2rem;
    font-weight: 700;
  }

  & + & {
    margin-top: 20px;
  }
`;

export default function MenuList() {
  return (
    <List>
      <p>런던</p>
    </List>
  );
}