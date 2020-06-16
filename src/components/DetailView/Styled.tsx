import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../Theme';
import media from '../../libs/MediaQuery';

type TStatus = {
  status: boolean;
};

// Detaul View
export const DetailView = styled.div`
  display: flex;
  background: ${({ status }: TStatus) =>
    status ? darkTheme.listGradient : lightTheme.gradient};

  ${media.tablet`

  `};

  ${media.mobile`
    justify-content: center;
  `};
`;

export const MenuListsSection = styled.section`
  position: relative;
  width: 12vw;
  padding: 32px 0 0 32px;
  margin-bottom: 50px;
  text-align: center;

  ${media.mobile`
    display: none;
  `};
`;

export const MenuListsUL = styled.ul`
  width: 100%;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  padding-right: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListAddMenu = styled.div`
  margin: 30px auto 0 auto;
  background: #eee;
  width: 75px;
  border-radius: 50%;
  height: 75px;
`;

export const ListAddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  img {
    width: 35px;
    height: 35px;
  }
`;

export const AddModal = styled.div`
  position: absolute;
`;

export const DetailSection = styled.section`
  position: relative;
  width: 88vw;
  height: 93.5vh;
  padding: 32px 32px 50px 32px;

  ${media.desktop`
    button:first-child {
      visibility: hidden;
    }
  `};
`;

// Detail Weather Box

export const DetailWeatherBox = styled.div`
  background: ${({ status }: TStatus) =>
    status ? darkTheme.listColor : lightTheme.gradient2};
  display: flex;
  height: 50%;
  padding: 32px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: ${({ status }: TStatus) => (status ? darkTheme.color : `#eee`)};

  ${media.mobile`
    padding: 16px;
  `}
`;

export const ConditionBox = styled.div`
  position: relative;
  width: 100%;

  ${media.mobile`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  `}
`;

export const InfoBox = styled.div`
  position: absolute;
  top: 20%;
  right: 15%;

  ${media.mobile`
    position: static;
    text-align: center;
  `}
`;

export const CityName = styled.p`
  display: inline-block;
  font-size: 3rem;
  padding-bottom: 10px;
  box-shadow: 0 4px 0 0 #fff;

  ${media.mobile`
    padding-bottom: 5px;
    box-shadow: 0 2px 0 0 #fff;
  `}
`;

export const TimeInfo = styled.div`
  position: absolute;
  top: 10px;
  right: 32px;
  font-size: 1.6rem;
  color: ${({ status }: TStatus) => status && '#eee'};
`;

export const DetailBox = styled.div`
  display: inline-block;
  width: 60%;

  ${media.mobile`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 15px;
  `}
`;

export const TempBox = styled.div`
  text-align: center;

  p {
    font-size: 9.6rem;
  }

  span {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  ${media.mobile`
    p {
      font-size: 3.5rem;
      margin-top: 15px;
    }

    span {
      font-size: 1.5rem;
    }
  `}
`;

export const HumWindBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
  font-size: 1.4rem;

  ${media.mobile`
    display: flex;
  `}
`;

export const HumidityInfo = styled.div`
  width: 30%;
  text-align: center;
  padding-right: 20px;
  border-right: 1px solid #fff;

  span {
    display: block;
    margin-top: 5px;
  }

  ${media.mobile`
    width: 100%;
    padding: 0;
    border: none;

    p {
      font-weight: 700;
    }
  `}
`;

export const WindInfo = styled.div`
  width: 30%;
  text-align: center;
  padding-left: 20px;
  border-left: 1px solid #fff;

  span {
    display: block;
    margin-top: 5px;
  }

  ${media.mobile`
    width: 100%;
    padding: 0;
    border: none;

    p {
      font-weight: 700;
    }
  `}
`;

//Detail Forecast Box
export const DetailForecastBox = styled.div`
  position: relative;
  background: #fff8fb;
  height: 50%;
  padding: 32px;
  border-top: ${({ status }: TStatus) => status && `1px solid #616161`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: ${({ status }: TStatus) => status && darkTheme.listColor};

  ${media.mobile`
    padding: 16px;
  `}
`;

export const ForecastLists = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 100%;
  margin: 0 auto;

  ${media.mobile`
    flex-wrap: wrap;
    overflow-y: auto;
  `}
`;

export const BackButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
`;

export const ButtonCircle = styled.div`
  background: #2b244d;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const BackArrow = styled.div``;

// ForcastList

export const ForecastListLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 10px 0;
  text-align: center;
  color: ${({ status }: TStatus) => (status ? darkTheme.color : `#39437a`)};
  font-size: 2rem;

  ${media.mobile`
    /* border-bottom: 1px solid black; */

    &:last-child {
      border: none;
    }

    p + div {
      margin-top: 10px;
    }

    div + p {
      margin-top: 10px;
    }
  `}
`;

export const ForecastDate = styled.p`
  font-size: 2.4rem;
  font-weight: 600;

  ${media.mobile`
    font-size: 2rem;
  `}
`;

export const ForecastWeather = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100px;
    margin: auto;
  }

  span {
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  img + span {
    margin-top: 10px;
  }

  ${media.mobile`
    img {
      width: 85px;
    }

    span {
      font-size: 1.2rem;
    }
  `}
`;

export const ForecastTemp = styled.p`
  font-size: 2.2rem;

  ${media.mobile`
    font-size: 2rem;
  `}
`;
