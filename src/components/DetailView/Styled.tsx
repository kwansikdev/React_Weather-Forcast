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
  margin-top: 130px;
  padding: 50px 40px;
  border-radius: 10px;

  ${media.mobile`
    justify-content: space-between;
    height: calc(100% - 80px);
    margin-top: 30px;
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
    font-size: 2rem;
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
    font-size: 3rem;
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
export const DetailForecastBox = styled.ul`
  position: relative;
  display: flex;
  padding: 32px 0;

  ${media.desktop`
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  `}

  ${media.mobile`
    flex-direction: column;
    width: 100%;
    margin: 15px 0;
    padding: 15px 0;
    overflow-x: auto;
  `}
`;

// ForcastList
export const ForecastListLi = styled.li`
  background: ${({ status }: TStatus) =>
    status ? `rgba(35, 28, 30, 0.4)` : `rgba(60, 120, 159, 0.4)`};

  color: #fff;
  font-size: 2rem;
  text-align: center;

  ${media.desktop`
    width: 20%;
    margin: 0 10px;
    padding: 20px 0;
  `}

  ${media.mobile`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 10px;

    & + & {
      margin-top: 20px;
    }
  `}
`;

export const ForecastDate = styled.p`
  font-size: 2.4rem;
  font-weight: 600;

  ${media.desktop`
    margin-bottom: 25px;
  `}

  ${media.mobile`
    width: 40px;
    font-size: 2rem;
  `}
`;

export const ForecastWeather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff span {
    display: inline-block;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  ${media.desktop`
    margin-bottom: 25px;

    span {
    margin-top: 10px;
  }
  `}

  ${media.mobile`
    width: 70px;
    font-size: 3rem;

    span {
      font-size: 1.2rem;
    }
  `}
`;

export const ForecastTemp = styled.p`
  font-size: 2.2rem;

  ${media.mobile`
    width: 40px;
    font-size: 2rem;
  `}
`;
