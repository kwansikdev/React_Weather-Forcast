import React from 'react';
import styled from 'styled-components';

const DetailBox = styled.div`
  height: 100%;
`;

// Detail Weather Box
const DetailWeatherBox = styled.div`
  background: linear-gradient(to top, #ff8bee 0, #8b70c7 50%, #7081c7 100%);
  display: flex;
  height: 50%;
  padding: 32px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: #fff;
`;

const ConditionBox = styled.div`
  width: 50%;
  padding: 30px;
`;

const TempBox = styled.div`
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
`;

const HumWindBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
  font-size: 1.4rem;
`;

const HumidityInfo = styled.div`
  width: 30%;
  text-align: center;
  padding-right: 20px;
  border-right: 1px solid #fff;

  span {
    display: block;
    margin-top: 5px;
  }
`;

const WindInfo = styled.div`
  width: 30%;
  text-align: center;
  padding-left: 20px;
  border-left: 1px solid #fff;

  span {
    display: block;
    margin-top: 5px;
  }
`;

const CityBox = styled.div`
  position: relative;
  width: 50%;
  padding: 30px;
`;

const CityName = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  /* margin-top: 40px; */
  text-align: center;
  font-size: 3rem;

  span {
    padding-bottom: 10px;
    box-shadow: 0 4px 0 0 #fff;
  }
`;

//Detail Forecast Box
const DetailForecastBox = styled.div`
  background: #fff8fb;
  height: 50%;
  padding: 32px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const ForecastLists = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 100%;
  margin: 0 auto;
`;

const ForecastList = styled.li`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%;
  height: 100%;
  padding: 10px 0;
  border-radius: 20px;
  color: #39437a;
  text-align: center;
  font-size: 2rem;
`;

const ForecastDate = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
`;

const ForecastWeather = styled.div`
  display: flex;
  flex-direction: column;

  img {
  }

  span {
    font-size: 1.6rem;
    text-transform: uppercase;
  }
`;

const ForecastTemp = styled.p`
  font-size: 2.2rem;
`;

export default function WeatherDetail() {
  return (
    <DetailBox>
      <DetailWeatherBox>
        <ConditionBox>
          <TempBox>
            <p>12°</p>
            <span>clear</span>
          </TempBox>
          <HumWindBox>
            <HumidityInfo>
              <p>HUMIDITY</p>
              <span>16%</span>
            </HumidityInfo>
            <WindInfo>
              <p>WIND</p>
              <span>2 K/M</span>
            </WindInfo>
          </HumWindBox>
        </ConditionBox>
        <CityBox>
          <CityName>
            <span>LONDON</span>
          </CityName>
        </CityBox>
      </DetailWeatherBox>
      <DetailForecastBox>
        <ForecastLists>
          <ForecastList>
            <ForecastDate>Mon</ForecastDate>
            <ForecastWeather>
              <img src="" alt="날씨" />
              <span>clouds</span>
            </ForecastWeather>
            <ForecastTemp>12°</ForecastTemp>
          </ForecastList>
          <ForecastList>
            <ForecastDate>Mon</ForecastDate>
            <ForecastWeather>
              <img src="" alt="날씨" />
              <span>clouds</span>
            </ForecastWeather>
            <ForecastTemp>12°</ForecastTemp>
          </ForecastList>
          <ForecastList>
            <ForecastDate>Mon</ForecastDate>
            <ForecastWeather>
              <img src="" alt="날씨" />
              <span>clouds</span>
            </ForecastWeather>
            <ForecastTemp>12°</ForecastTemp>
          </ForecastList>
          <ForecastList>
            <ForecastDate>Mon</ForecastDate>
            <ForecastWeather>
              <img src="" alt="날씨" />
              <span>clouds</span>
            </ForecastWeather>
            <ForecastTemp>12°</ForecastTemp>
          </ForecastList>
        </ForecastLists>
      </DetailForecastBox>
    </DetailBox>
  );
}
