import styled, { css, keyframes } from 'styled-components';
import media from '../../libs/MediaQuery';
import { lightTheme, darkTheme } from '../../Theme';

type TStatus = {
  status: boolean;
};

export const AddDiv = styled.div`
  display: flex;
  /* background: linear-gradient(to top, #1c003d 0, #8a003c 50%, #1c003d 100%); */
  background: ${({ status }: TStatus) =>
    status ? darkTheme.gradient : lightTheme.gradient};
  /* linear-gradient(to top, #5ee7df 0, #66a6ff 100%); */
  height: 93vh;
  padding: 60px;

  ${({ status }: TStatus) => status && css``}
`;

// 검색영역
export const SearchSection = styled.section`
  background: ${({ status }: TStatus) => (status ? darkTheme.header : '#fff')};
  width: 50%;
  padding: 30px;
  border-right: ${({ status }: TStatus) =>
    status ? `1px solid #616161` : 'none'};
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;

  h2 {
    color: ${({ status }: TStatus) =>
      status ? darkTheme.color : lightTheme.color};
  }

  h2 + div {
    margin-top: 30px;
  }
`;

export const SearchTitle = styled.h2`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
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
  background: rgba(255, 255, 255, 1);
  width: 60px;
  height: 60px;
  position: absolute;
  top: -3px;
  right: 9%;
  /* background: rgba(49, 264, 174, 1); */
  border: none;
  box-shadow: 0 0 10px 3px rgba(0, 0, 255, 0.2);
  border-radius: 30px;
  cursor: pointer;

  &:hover {
  }

  img {
    height: 35px;
  }
`;

export const SearchAutoList = styled.ul``;

// 리스트영역

const leftSlide = keyframes`
  from {
    /* transform: translateX(506px) */
    opacity: 0;
  }
  to {
    /* transform: translateX(0) */
    opacity: 1;
  }
`;

export const ListsSection = styled.section`
  position: relative;
  /* background: #859efe; */
  /* background: linear-gradient(to top, #a985fe 0, #859efe 50%, #85fee6 100%); */
  /* background: linear-gradient(to top, #66a6ff 0, #5ee7df 100%); */
  background: ${({ status }: TStatus) =>
    status
      ? darkTheme.header
      : `linear-gradient(to top, #66a6ff 0, #5ee7df 100%)`};
  width: 50%;
  padding: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const ListsUl = styled.ul`
  width: 100%;
  height: 90%;
  overflow-y: auto;
`;

export const ListLi = styled.li`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  animation: ${leftSlide} 1s ease-out forwards;

  & + & {
    margin-top: 20px;
  }
`;

export const ListButton = styled.button`
  display: flex;
  justify-content: space-between;
  width: 98%;
  padding: 10px;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  outline: none;
  font-size: 1.6rem;
`;

export const ListCountry = styled.p`
  font-weight: 600;
`;

export const ListTem = styled.div`
  p + p {
    margin-left: 10px;
  }
`;

export const ListTemLow = styled.p`
  display: inline-block;
`;

export const ListTemHigh = styled.p`
  display: inline-block;
`;

export const GotoView = styled.button`
  background: transparent;
  position: absolute;
  width: 50px;
  height: 50px;
  bottom: 1.5%;
  left: 47%;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    /* box-shadow: 0 0 10px 5px rgba(0, 0, 255, 0.2); */
    /* box-shadow: 0 0 10px 10px rgba(133, 254, 230, 0.5); */
    background: #fff;
  }

  img {
    width: 40px;
  }
`;
