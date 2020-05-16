import React from 'react';
import * as S from './Styled';
import { List } from '../../Typescript/fiveDaysWeatherType';

type TProps = {
  status: boolean;
  day: List;
};

export default function ForecastList({ status, day }: TProps) {
  const weekend = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];
  const dayInfo = {
    day: day && weekend[new Date(day.dt_txt).getDay()],
    condition: day && day.weather[0].main,
    temp: day && (day.main.temp - 275.15).toFixed(0),
    img: day && day.weather[0].icon.slice(0, 2),
  };

  const weather_imgs = {
    suuny: `/images/sunny.svg`,
    sun_cloud: `/images/sun-clouds.svg`,
    cloud: `/images/clouds.svg`,
    rain: `/images/umbrella.svg`,
    snow: `/images/snow.svg`,
    thunder: `/images/thunder.svg`,
    mist: `/images/froggy.svg`,
  };

  const weather_img =
    dayInfo.img === '01'
      ? weather_imgs.suuny
      : dayInfo.img === `02`
      ? weather_imgs.sun_cloud
      : dayInfo.img === '03' || dayInfo.img === '04'
      ? weather_imgs.cloud
      : dayInfo.img === '09' || dayInfo.img === '10'
      ? weather_imgs.rain
      : dayInfo.img === '11'
      ? weather_imgs.thunder
      : dayInfo.img === '13'
      ? weather_imgs.snow
      : dayInfo.img === '50'
      ? weather_imgs.mist
      : undefined;

  return (
    <S.ForecastListLi status={status}>
      <S.ForecastDate>{dayInfo.day}</S.ForecastDate>
      <S.ForecastWeather>
        <img src={weather_img} alt="날씨" />
        <span>{dayInfo.condition}</span>
      </S.ForecastWeather>
      <S.ForecastTemp>{dayInfo.temp}°</S.ForecastTemp>
    </S.ForecastListLi>
  );
}
