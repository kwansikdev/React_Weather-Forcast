import React from 'react';
import * as S from './Styled';
import WeatherList from './WeaterList';
import { useSelector } from 'react-redux';
import { RouteState } from '../../redux/modules/reducer';

type TProps = {
  cities: string[];
  status: boolean;
  currentCity: (city: string) => void;
};

export default function WeatherView({ cities, status, currentCity }: TProps) {
  const cityWeathers = useSelector(
    (state: RouteState) => state.search.city_weathers,
  );

  function addList(city: string) {
    currentCity(city);
  }

  return (
    <>
      <S.View status={status}>
        <S.WeatherLists>
          {cities &&
            cities.map((city, index) => (
              <WeatherList
                key={index}
                status={status}
                weather={cityWeathers[index]}
                onClick={() => addList(city)}
              />
            ))}
        </S.WeatherLists>
      </S.View>
    </>
  );
}
