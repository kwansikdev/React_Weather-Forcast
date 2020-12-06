import styled from 'styled-components';
import media from '../../libs/MediaQuery';

type TStatus = {
  status: boolean;
};

// Detaul View
export const DetailView = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 30px;
  padding: 50px 40px;
  border-radius: 10px;

  ${media.tablet`
    padding: 30px;

    `};

  ${media.mobile`
    padding: 20px;

  `};
`;

export const DetailSection = styled.section`
  position: relative;
  width: 100%;

  ${media.tablet`
    margin: auto;
  `}
`;

// Detail Weather Box

export const DetailWeatherBox = styled.div`
  color: #fff;
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
  font-size: 7.2rem;

  ${media.mobile`
    font-size: 3rem;
  `}
`;

export const TimeInfo = styled.div`
  position: absolute;
  bottom: 30px;
  right: 40px;
  font-size: 1.6rem;
  color: #fff;

  ${media.mobile`
    bottom: 8px;
    right: 20px;
    font-size: 1.2rem;
  `}
`;

export const TempBox = styled.div``;

export const TempInfo = styled.p`
  font-size: 6rem;

  ${media.mobile`
    font-size: 4rem;
  `}
`;

export const FeelsLikeTempInpo = styled.p`
  margin: 10px 0;
  font-size: 2.4rem;

  ${media.mobile`
    font-size: 2rem;
  `}
`;

export const HumWindBox = styled.div`
  display: flex;
  margin-top: 20px;
  text-align: center;
  font-size: 1.4rem;

  ${media.mobile`
    margin-top: 10px;
    font-size: 1.2rem;
  `}
`;

export const HumidityInfo = styled.p`
  padding-right: 20px;
  border-right: 1px solid #fff;
`;

export const WindInfo = styled.p`
  padding-left: 20px;
  border-left: 1px solid #fff;
`;

//Detail Forecast Box
export const DetailForecastBox = styled.div`
  position: relative;
  display: flex;
  padding: 32px 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  ${media.mobile`
    padding: 15px 0;
    overflow-x: auto;
  `}
`;

export const ForecastLists = styled.ul`
  display: flex;
  justify-content: space-around;
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
  background: ${({ status }: TStatus) =>
    status ? `rgba(35, 28, 30, 0.4)` : `rgba(60, 120, 159, 0.4)`};
  width: 20%;
  margin: 0 10px;
  padding: 20px 0;
  color: #fff;
  font-size: 2rem;
  text-align: center;

  ${media.mobile`
    width: 100px;
  `}
`;

export const ForecastDate = styled.p`
  margin-bottom: 25px;
  font-size: 2.4rem;
  font-weight: 600;

  ${media.mobile`
    font-size: 2rem;
  `}
`;

export const ForecastWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;

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
