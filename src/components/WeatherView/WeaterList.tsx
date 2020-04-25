import React, { createRef } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as S from './Styled';
import { currentWeahterType } from '../../Type/currentWeahterType';
import RemoveButton from '../Common/RemoveButton';
import { useDispatch } from 'react-redux';
import {
  addCurrentCitySaga,
  removeCitySaga,
} from '../../redux/modules/weathers';

type TProps = {
  status: boolean;
  weather: currentWeahterType;
};

const WeatherList: React.FC<RouteComponentProps & TProps> = ({
  history,
  status,
  weather,
}) => {
  const cityName: any = createRef();
  const dispatch = useDispatch();

  const weatherInfo = {
    name: weather && weather.name,
    temp: weather && (weather.main.temp - 275.15).toFixed(1),
    status: weather && weather.weather[0].main.toUpperCase(),
    min: weather && (weather.main.temp_min - 275.15).toFixed(1),
    max: weather && (weather.main.temp_max - 275.15).toFixed(1),
    img: weather && weather.weather[0].icon.slice(0, 2),
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

    // 리덕스의 current에 city이름 추가
    dispatch(addCurrentCitySaga(cityName.current.innerHTML));
  }

  const removeCard = () => {
    // 사가함수 하나로 합치기
    console.log(cityName.current.innerHTML);
    dispatch(removeCitySaga(cityName.current.innerHTML));
  };

  return (
    <>
      <S.WeatherList>
        <RemoveButton status={status} onClick={removeCard} size={'12'} />
        <S.WeatherButton onClick={gotoDetail} status={status}>
          <S.ItemTitle ref={cityName}>{weatherInfo.name}</S.ItemTitle>
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
