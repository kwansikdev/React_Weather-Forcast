import React from 'react';
import styled from 'styled-components';
import ForecastList from './ForecastList';
import { currentWeahterType } from '../../Type/currentWeahterType';
import { City, List } from '../../Type/fiveDaysWeatherType';

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

// type
type TProps = {
  city: string;
  currentWeather: currentWeahterType;
  currentFiveDaysWeather: {
    city: City;
    weekend: List[];
  };
};

export default function WeatherDetail({
  city,
  currentWeather,
  currentFiveDaysWeather,
}: TProps) {
  const WeatherInfo = {
    temp: currentWeather && (currentWeather.main.temp - 275.15).toFixed(0),
    condition: currentWeather && currentWeather.weather[0].main.toUpperCase(),
    humidity: currentWeather && currentWeather.main.humidity,
    wind: currentWeather && currentWeather.wind.speed,
  };

  return (
    <DetailBox>
      <DetailWeatherBox>
        <ConditionBox>
          <TempBox>
            <p>{WeatherInfo.temp}°</p>
            <span>{WeatherInfo.condition}</span>
          </TempBox>
          <HumWindBox>
            <HumidityInfo>
              <p>HUMIDITY</p>
              <span>{WeatherInfo.humidity}%</span>
            </HumidityInfo>
            <WindInfo>
              <p>WIND</p>
              <span>{WeatherInfo.wind} K/M</span>
            </WindInfo>
          </HumWindBox>
        </ConditionBox>
        <CityBox>
          <CityName>
            <span>{city}</span>
          </CityName>
        </CityBox>
      </DetailWeatherBox>
      <DetailForecastBox>
        <ForecastLists>
          {currentFiveDaysWeather &&
            currentFiveDaysWeather.weekend.map((day, index: number) => (
              <ForecastList key={index} day={day} />
            ))}
        </ForecastLists>
      </DetailForecastBox>
    </DetailBox>
  );
}
