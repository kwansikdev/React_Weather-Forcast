import React from 'react';
import * as S from './Styled';
import { City, List } from '../../Typescript/fiveDaysWeatherType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from '../Common/Icons';

type TProps = {
  status: boolean;
  currentFiveDaysWeather: {
    city: City;
    weekend: List[];
  };
};

export default function ForecastList({
  status,
  currentFiveDaysWeather,
}: TProps) {
  const weekend = ['SUN', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];

  return (
    <S.DetailForecastBox>
      {currentFiveDaysWeather?.weekend.map((list: List, index: number) => (
        <S.ForecastListLi key={index} status={status}>
          <S.ForecastDate>
            {weekend[new Date(list.dt_txt).getDay()]}
          </S.ForecastDate>
          <S.ForecastWeather>
            <FontAwesomeIcon
              icon={icon(list.weather[0].main)}
              style={{ fontSize: `4rem`, color: `#fff` }}
            />
            <span>{list.weather[0].main}</span>
          </S.ForecastWeather>
          <S.ForecastTemp>
            {(list.main.temp - 275.15).toFixed(0)}°
          </S.ForecastTemp>
        </S.ForecastListLi>
      ))}
    </S.DetailForecastBox>
  );
}
