import styled, { css } from 'styled-components';

export const AddDiv = styled.div`
  display: flex;
  /* background: linear-gradient(to top, #86dbff 0, #e0c3fc 100%); */
  height: 93vh;
  padding: 60px;
`;

// 검색영역
export const SearchSection = styled.section`
  background: #fff;
  width: 50%;
  padding: 30px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const SearchTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  color: #4d47ff;
  text-transform: uppercase;
`;

export const SearchForm = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const SearchBox = styled.div`
  width: 70%;
`;

export const SearchInput = styled.input`
  /* background: blue; */
  width: 100%;
  padding: 15px 40px 15px 20px;
  border-radius: 30px;
  border: none;
  box-shadow: 0 0 10px 3px rgba(0, 0, 255, 0.2);
  font-size: 1.6rem;
  outline: none;
`;

export const SearchButton = styled.button`
  position: absolute;
  top: -3px;
  right: 13%;
  width: 60px;
  height: 60px;
  /* background: rgba(49, 264, 174, 1); */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0 10px 3px rgba(0, 0, 255, 0.2);
  border: none;
  border-radius: 30px;

  img {
    height: 35px;
  }
`;

export const SearchAutoList = styled.ul``;

// 리스트영역
export const ListSection = styled.section`
  background: pink;
  width: 50%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;
