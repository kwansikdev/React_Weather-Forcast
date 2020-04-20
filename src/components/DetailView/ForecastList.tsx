import React from 'react';
import styled from 'styled-components';
import { List } from '../../Type/fiveDaysWeatherType';

const ForecastListLi = styled.li`
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

type TProps = {
  day: List;
};

export default function ForecastList({ day }: TProps) {
  console.log(day);
  const weekend = ['MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT', 'SUN'];
  const dayInfo = {
    day: day && weekend[new Date(day.dt_txt).getDay() - 1],
    condition: day && day.weather[0].main,
    temp: day && (day.main.temp - 275.15).toFixed(0),
    img: day && day.weather[0].icon.slice(0, 2),
  };

  console.log(dayInfo.day);
  console.log(dayInfo.img);

  const weather_imgs = {
    suuny: `/images/sunny.svg`,
    sun_cloud: `/images/sun_cloud.svg`,
    cloud: `/images/cloud.svg`,
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
    <ForecastListLi>
      <ForecastDate>{dayInfo.day}</ForecastDate>
      <ForecastWeather>
        <img src={weather_img} alt="날씨" />
        <span>{dayInfo.condition}</span>
      </ForecastWeather>
      <ForecastTemp>{dayInfo.temp}°</ForecastTemp>
    </ForecastListLi>
  );
}
