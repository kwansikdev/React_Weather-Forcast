import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../Theme';
import media from '../../libs/MediaQuery';

type TStatus = {
  status: boolean;
};

// Weather View
export const WeatherView = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;

  ${media.tablet`
    display: block;
  `}

  ${media.mobile`
    display: block;
  `}
`;

export const InfoArea = styled.div`
  h2 {
    font-size: 7.2rem;
    font-weight: 700;
    color: #fff;
  }

  ${media.tablet`
    h2 {
      font-size: 5.2rem;
    }
  `}

  ${media.mobile`
    h2 {
      font-size: 3.2rem;
    }
  `}
`;

export const SearchDiv = styled.div`
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  background-color: rgba(255, 255, 255, 0);
  width: 100%;
  font-size: 2.4rem;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  border-bottom: 3px solid white;
  padding: 10px 40px 10px 5px;
  outline: none;
  color: #fff;

  ::placeholder {
    font-size: 2.4rem;
    color: #fff;
  }

  ${media.tablet`
  `}
`;

export const SearchButton = styled.button`
  background-color: transparent;
  width: 3rem;
  height: 3rem;
  margin: 10px 0 0 -35px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const WeatherLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ListsSection = styled.section`
  width: 400px;
  min-width: 290px;

  ${media.tablet`
    width: 100%;
    margin-top: 40px;
  `}

  ${media.mobile`
    margin-top: 20px;
    width: 100%;
  `}
`;

export const ListsUl = styled.ul`
  display: flex;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    display: none;
  }

  ${media.desktop`
    justify-content: space-around;
  `}

  ${media.tablet`
    width: 400px;
    max-height: 60vh;
    margin: 0 auto;
  `}
`;

export const ListLi = styled.li`
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  position: relative;
  width: 95%;
  padding: 20px 30px;
  margin-bottom: 20px;
  backdrop-filter: blur(3px);

  :hover {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  }

  ${media.mobile`
    width: 100%;
    padding: 15px;
  `}
`;

export const InfoDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const TempInfoDiv = styled.div`
  text-align: center;
  color: #fff;

  p:first-child {
    font-size: 7.2rem;
  }

  p:last-child {
    font-size: 1.6rem;
  }

  ${media.mobile`
    p:first-child {
      font-size: 5.2rem;
    }

    p:last-child {
      font-size: 1.6rem;
    }
  `}
`;

export const CityInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;

  h3 {
    display: flex;
    align-items: center;
    font-size: 3.2rem;
    font-weight: 500;
    color: #fff;
  }

  svg {
    margin-left: 15px;
  }

  ${media.mobile`
    h3 {
      font-size: 2rem;
      font-weight: 500;
    }}
  `}
`;

export const CityName = styled.p``;

export const ListTemp = styled.div`
  display: flex;
  margin-top: 10px;

  p {
    font-size: 1.6rem;
    font-weight: 400;
    color: #fff;
  }
`;

export const ListTempHigh = styled.p``;

export const ListTempLog = styled.p``;

export const ViewDetailButton = styled.button`
  position: absolute;
  background: transparent;
  bottom: 20px;
  right: 30px;
  border: none;
  outline: none;
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;
  cursor: pointer;

  ${media.mobile`
    bottom: 15px;
    right: 15px;
  `}
`;

export const WeatherButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 32px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

export const ItemTitle = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 5px;

  ${media.mobile`
    font-size: 2rem;
  `}
`;

export const CurrentWeatherIcon = styled.div`
  width: 160px;
  height: 200px;
  margin-top: 25px;

  img {
    width: 100%;
    height: 100%;
  }

  ${media.mobile`
    width: 100px;
    height: 150px;

  `}
`;

export const CurrentWeather = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CurrentTemp = styled.p`
  font-size: 4.8rem;

  ${media.mobile`
    font-size: 3.8rem;
  `}
`;

export const CurrentStatus = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  letter-spacing: 5px;

  ${media.mobile`
    font-size: 1.4rem;
  `}
`;

export const ItemTemp = styled.section`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  div + div {
    margin-left: 100px;
  }

  img {
    width: 20px;
    height: 20px;
  }

  p {
    font-size: 3.2rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: 600;
  }

  ${media.mobile`
    p {
      font-size: 2.2rem;
    }

    span {
      font-size: 1.4rem;
    }
  `}
`;

export const ItemTempLow = styled.div`
  span {
    color: #00ff9b;
  }
`;

export const ItemTempHigh = styled.div`
  span {
    color: #ff0000;
  }
`;

export const AddCountryCard = styled.li`
  width: 368px;
  margin: 32px;

  ${media.mobile`
  max-width: 250px;
    margin: 32px 0;
  `}
`;

export const CountryCardButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 32px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  color: ${({ status }: TStatus) =>
    status ? darkTheme.color : lightTheme.color};
  background: ${({ status }: TStatus) => status && darkTheme.listGradient};
  font-size: 2.4rem;
  font-weight: 700;

  ${media.desktop`
    &:hover {
      box-shadow: 0 0 10px 3px
        ${({ status }: TStatus) =>
          status ? darkTheme.shadow : lightTheme.shadow};
    }
  `}

  section {
    margin-top: 25px;
  }

  p + svg {
    margin-top: 41px;
  }

  svg + img {
    margin-top: 41px;
  }
`;

export const Plusicon = styled.img`
  width: 75px;
  height: 75px;
  background: #f5f8ff;
  border-radius: 50%;
`;

export const AddCityIcon = styled.img`
  width: 100%;

  fill: #c495fd;
`;
