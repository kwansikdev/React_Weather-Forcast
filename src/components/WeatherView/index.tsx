import React from 'react';
import * as S from './Styled';
import WeatherList from './WeaterList';
import { useSelector } from 'react-redux';
import { RouteState } from '../../redux/modules/reducer';

type TProps = {
  cities: string[];
};

export default function WeatherView({ cities }: TProps) {
  const cityWeathers = useSelector(
    (state: RouteState) => state.search.city_weathers,
  );

  function addList(city: string) {}

  return (
    <>
      <S.View>
        <S.WeatherLists>
          {cities &&
            cities.map((city, index) => (
              <WeatherList
                city={city}
                weather={cityWeathers[index]}
                onClick={() => addList(city)}
              />
            ))}
        </S.WeatherLists>
      </S.View>
    </>
  );
}
