import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as S from './Styled';
import { currentWeahterType } from '../../Type/currentWeahterType';

type TProps = {
  city: string;
  weather: currentWeahterType;
  onClick: () => void;
};

const WeatherList: React.FC<RouteComponentProps & TProps> = ({
  city,
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
  };

  function gotoDetail() {
    history.push(`/weathers/view/detail/${city.toLowerCase()}`);
  }

  return (
    <>
      <S.WeatherList onClick={onClick}>
        <S.WeatherButton onClick={gotoDetail}>
          <S.ItemTitle>{weatherInfo.name}</S.ItemTitle>
          <S.CurrentWeatherIcon>
            <img src="/" alt="날씨" />
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
