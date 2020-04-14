import React from 'react';
import * as S from './Styled';
import WeatherList from './WeaterList';
import { useSelector } from 'react-redux';
import { RouteState } from '../../redux/modules/reducer';

type TProps = {
  cities: string[];
  currentCity: (city: string) => void;
};

export default function WeatherView({ cities, currentCity }: TProps) {
  const cityWeathers = useSelector(
    (state: RouteState) => state.search.city_weathers,
  );

  function addList(city: string) {
    currentCity(city);
  }

  return (
    <>
      <S.View>
        <S.WeatherLists>
          {cities &&
            cities.map((city, index) => (
              <WeatherList
                city={city}
                key={index}
                weather={cityWeathers[index]}
                onClick={() => addList(city)}
              />
            ))}
        </S.WeatherLists>
      </S.View>
    </>
  );
}
