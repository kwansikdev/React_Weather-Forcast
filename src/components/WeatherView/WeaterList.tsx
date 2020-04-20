import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as S from './Styled';
import { currentWeahterType } from '../../Type/currentWeahterType';

type TProps = {
  weather: currentWeahterType;
  onClick: () => void;
};

const WeatherList: React.FC<RouteComponentProps & TProps> = ({
  history,
  weather,
  onClick,
}) => {
  const weatherInfo = weather && {
    name: weather.name.toUpperCase(),
    temp: (weather.main.temp - 275.15).toFixed(1),
    status: weather.weather[0].main.toUpperCase(),
    min: (weather.main.temp_min - 275.15).toFixed(1),
    max: (weather.main.temp_max - 275.15).toFixed(1),
    img: weather.weather[0].icon.slice(0, 2),
  };

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
    weatherInfo.img === '01'
      ? weather_imgs.suuny
      : weatherInfo.img === `02`
      ? weather_imgs.sun_cloud
      : weatherInfo.img === '03' || weatherInfo.img === '04'
      ? weather_imgs.cloud
      : weatherInfo.img === '09' || weatherInfo.img === '10'
      ? weather_imgs.rain
      : weatherInfo.img === '11'
      ? weather_imgs.thunder
      : weatherInfo.img === '13'
      ? weather_imgs.snow
      : weatherInfo.img === '50'
      ? weather_imgs.mist
      : undefined;

  function gotoDetail() {
    history.push(`/weathers/view/detail/${weatherInfo.name.toLowerCase()}`);
  }

  return (
    <>
      <S.WeatherList onClick={onClick}>
        <S.WeatherButton onClick={gotoDetail}>
          <S.ItemTitle>{weatherInfo.name}</S.ItemTitle>
          <S.CurrentWeatherIcon>
            <img src={weather_img} alt="날씨" />
          </S.CurrentWeatherIcon>
          <S.CurrentWeather>
            <S.CurrentTemp>{weatherInfo.temp}°</S.CurrentTemp>
            <S.CurrentStatus>{weatherInfo.status}</S.CurrentStatus>
          </S.CurrentWeather>
          <S.ItemTemp>
            <S.ItemTempLow>
              <img src="/images/down-arrow.svg" alt="최저온도" />
              <p>{weatherInfo.min}</p>
              <span>min</span>
            </S.ItemTempLow>
            <S.ItemTempHigh>
              <img src="/images/up-arrow.svg" alt="최고온도" />
              <p>{weatherInfo.max}</p>
              <span>max</span>
            </S.ItemTempHigh>
          </S.ItemTemp>
        </S.WeatherButton>
      </S.WeatherList>
    </>
  );
};

export default withRouter(WeatherList);
