import React from 'react';
import ForecastList from './ForecastList';
import { currentWeahterType } from '../../Type/currentWeahterType';
import { City, List } from '../../Type/fiveDaysWeatherType';
import * as S from './Styled';

// type
type TProps = {
  status: boolean;
  city: string;
  currentWeather: currentWeahterType;
  currentFiveDaysWeather: {
    city: City;
    weekend: List[];
  };
};

export default function WeatherDetail({
  status,
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
    <S.DetailBox>
      <S.DetailWeatherBox status={status}>
        <S.ConditionBox>
          <S.TempBox>
            <p>{WeatherInfo.temp}°</p>
            <span>{WeatherInfo.condition}</span>
          </S.TempBox>
          <S.HumWindBox>
            <S.HumidityInfo>
              <p>HUMIDITY</p>
              <span>{WeatherInfo.humidity}%</span>
            </S.HumidityInfo>
            <S.WindInfo>
              <p>WIND</p>
              <span>{WeatherInfo.wind} K/M</span>
            </S.WindInfo>
          </S.HumWindBox>
        </S.ConditionBox>
        <S.CityBox>
          <S.CityName>
            <span>{city}</span>
          </S.CityName>
        </S.CityBox>
      </S.DetailWeatherBox>
      <S.DetailForecastBox status={status}>
        <S.ForecastLists>
          {currentFiveDaysWeather &&
            currentFiveDaysWeather.weekend.map((day, index: number) => (
              <ForecastList key={index} status={status} day={day} />
            ))}
        </S.ForecastLists>
      </S.DetailForecastBox>
    </S.DetailBox>
  );
}
