import React from 'react';
import moment from 'moment';
import ForecastList from './ForecastList';
import * as S from './Styled';
import { currentWeahterType } from '../../Typescript/currentWeahterType';
import { City, List } from '../../Typescript/fiveDaysWeatherType';
import A11yTitle from '../Common/A11yTitle';

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
    feelsLike:
      currentWeather && (currentWeather.main.feels_like - 275.15).toFixed(0),
    condition: currentWeather && currentWeather.weather[0].main.toUpperCase(),
    humidity: currentWeather && currentWeather.main.humidity,
    wind: currentWeather && currentWeather.wind.speed,
  };

  return (
    <>
      <S.DetailWeatherBox>
        <A11yTitle>{WeatherInfo.name}'s weather detail</A11yTitle>
        <S.CityName>
          {WeatherInfo.name}, {WeatherInfo.condition}
        </S.CityName>
        <S.TempBox>
          <S.TempInfo>{WeatherInfo.temp}°</S.TempInfo>
          <S.FeelsLikeTempInpo>
            Feels Like Temp {WeatherInfo.feelsLike}°
          </S.FeelsLikeTempInpo>
        </S.TempBox>
        <S.HumWindBox>
          <S.HumidityInfo>Humidity {WeatherInfo.humidity}%</S.HumidityInfo>
          <S.WindInfo>Wind {WeatherInfo.wind} K/M</S.WindInfo>
        </S.HumWindBox>
      </S.DetailWeatherBox>
    </>
  );
}
