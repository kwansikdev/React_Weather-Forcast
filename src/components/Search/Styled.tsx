import styled, { css, keyframes } from 'styled-components';
import { lightTheme, darkTheme } from '../../Theme';
import media from '../../libs/MediaQuery';

type TStatus = {
  status: boolean;
};

export const AddDiv = styled.div`
  display: flex;
  background: ${({ status }: TStatus) =>
    status ? darkTheme.gradient : lightTheme.gradient};
  min-height: 93.5vh;
  padding: 60px 100px;
  justify-content: center;

  ${({ status }: TStatus) => status && css``}

  ${media.mobile`
    flex-direction:column;
    padding: 40px;
    justify-content: space-between;
  `}
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
    word-break: keep-all;
  }

  h2 + div {
    margin-top: 30px;
  }

  ${media.tablet`
    width: 50%;
  `};

  ${media.mobile`
    width: 100%;
    height: 250px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
    border-right: none;
    border-bottom: ${({ status }: TStatus) =>
      status ? `1px solid #616161` : 'none'};
  `}
`;

export const SearchTitle = styled.h2`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 700;
  text-transform: uppercase;

  ${media.tablet`
    font-size: 2.5rem;
  `}

  ${media.mobile`
    font-size: 2rem;
  `}
`;

export const SearchForm = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const SearchBox = styled.div`
  width: 80%;

  ${media.mobile`
    width: 100%;
  `}
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 15px 40px 15px 20px;
  border-radius: 30px;
  border: none;
  box-shadow: 0 0 10px 3px rgba(0, 0, 255, 0.2);
  font-size: 1.6rem;
  outline: none;

  ${media.tablet`
    font-size: 1.4rem;
  `}

  ${media.mobile`
    height: 45px;
    font-size: 1.4rem;
  `}
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

  ${media.mobile`
    width: 55px;
    height: 55px;
    top: -6px;
    right: 0;
    img {
      height: 25px;
    }
  `}
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
  background: ${({ status }: TStatus) =>
    status ? darkTheme.header : lightTheme.gradient1};
  width: 50%;
  padding: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  ${media.tablet`
    width: 50%;
  `}

  ${media.mobile`
    width: 100%;
    height: 474px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 20px;
  `}
`;

export const ListsUl = styled.ul`
  display: flex;
  width: 100%;
  max-height: 90%;
  overflow-y: auto;
  flex-wrap: wrap;
`;

export const ListLi = styled.li`
  width: 100%;
  animation: ${leftSlide} 1s ease-out forwards;
  margin: 20px;

  ${media.desktop`
    width: 50%;
  `}
`;

export const ListButton = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  align-items: center;
  padding: 10px;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 1.6rem;

  p + div {
    margin-top: 10px;
  }
`;

export const ListCountry = styled.p`
  font-size: 2.4rem;
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
  left: calc(50% - 20px);
  border: none;
  border-radius: 30px;
  cursor: pointer;

  ${media.desktop`
    &:hover {
      background: #fff;
    }
  `}

  img {
    width: 40px;
  }
`;
