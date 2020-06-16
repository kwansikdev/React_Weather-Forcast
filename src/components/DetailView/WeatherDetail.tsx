import React from 'react';
import moment from 'moment';
import ForecastList from './ForecastList';
import * as S from './Styled';
import { currentWeahterType } from '../../Typescript/currentWeahterType';
import { City, List } from '../../Typescript/fiveDaysWeatherType';

// type
type TProps = {
  status: boolean;
  currentWeather: currentWeahterType;
  currentFiveDaysWeather: {
    city: City;
    weekend: List[];
  };
};

export default function WeatherDetail({
  status,
  currentWeather,
  currentFiveDaysWeather,
}: TProps) {
  const WeatherInfo = {
    name: currentWeather && currentWeather.name,
    temp: currentWeather && (currentWeather.main.temp - 275.15).toFixed(0),
    condition: currentWeather && currentWeather.weather[0].main.toUpperCase(),
    humidity: currentWeather && currentWeather.main.humidity,
    wind: currentWeather && currentWeather.wind.speed,
  };

  return (
    <>
      <S.DetailWeatherBox status={status}>
        <S.ConditionBox>
          <S.InfoBox>
            <S.CityName>{WeatherInfo.name}</S.CityName>
          </S.InfoBox>
          <S.DetailBox>
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
          </S.DetailBox>
        </S.ConditionBox>
      </S.DetailWeatherBox>
      <S.DetailForecastBox status={status}>
        <S.ForecastLists>
          {currentFiveDaysWeather &&
            currentFiveDaysWeather.weekend.map((day, index: number) => (
              <ForecastList key={index} status={status} day={day} />
            ))}
        </S.ForecastLists>
        <S.TimeInfo status={status}>
          {moment(
            currentFiveDaysWeather && currentFiveDaysWeather.weekend[0].dt_txt,
          ).format('LT')}{' '}
          기준
        </S.TimeInfo>
      </S.DetailForecastBox>
    </>
  );
}
