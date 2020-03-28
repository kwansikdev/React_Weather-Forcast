import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as S from './Styled';

const WeatherList: React.FC<RouteComponentProps> = ({ history }) => {
  function gotoDetail() {
    history.push('/weathers/view');
  }
  return (
    <>
      <S.WeatherList>
        <S.WeatherButton onClick={gotoDetail}>
          <S.ItemTitle>런던</S.ItemTitle>
          <S.CurrentWeatherIcon>
            <img src="/" alt="날씨" />
          </S.CurrentWeatherIcon>
          <S.CurrentWeather>
            <S.CurrentTemp>35°</S.CurrentTemp>
            <S.CurrentStatus>CLOUDS</S.CurrentStatus>
          </S.CurrentWeather>
          <S.ItemTemp>
            <S.ItemTempLow>
              <img src="/images/down-arrow.svg" alt="최저온도" />
              <p>23</p>
              <span>min</span>
            </S.ItemTempLow>
            <S.ItemTempHigh>
              <img src="/images/up-arrow.svg" alt="최고온도" />
              <p>34</p>
              <span>max</span>
            </S.ItemTempHigh>
          </S.ItemTemp>
        </S.WeatherButton>
      </S.WeatherList>
    </>
  );
};

export default withRouter(WeatherList);
