import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../Theme';
import media from '../../libs/MediaQuery';

type TStatus = {
  status: boolean;
};

// Weather View
export const View = styled.div`
  background: ${({ status }: TStatus) =>
    status ? darkTheme.gradient : lightTheme.gradient};
  padding: 0 45px;
  min-height: 93.5vh;
`;

export const WeatherLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const WeatherList = styled.li`
  position: relative;
  max-width: 368px;
  width: 100%;
  margin: 32px;

  button:first-child {
    visibility: hidden;
  }

  &:hover {
    button:first-child {
      visibility: visible;
    }
  }

  ${media.tablet`

  `};

  ${media.mobile`
    max-width: 250px;
    margin: 32px 16px;
  `};
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
  color: ${({ status }: TStatus) =>
    status ? darkTheme.color : lightTheme.color};
  background: ${({ status }: TStatus) => status && darkTheme.listGradient};

  ${media.desktop`
    &:hover {
      box-shadow: 0 0 10px 3px
        ${({ status }: TStatus) =>
          status ? darkTheme.shadow : lightTheme.shadow};
    }
  `};

  ${media.tablet`

  `};

  ${media.mobile`

  `}

  section {
    margin-top: 25px;
  }
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
  justify-content: space-between;
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
