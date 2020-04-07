import React from 'react';
import * as S from './Styled';
import WeatherList from './WeaterList';

type TProps = {
  cities: string[];
};

export default function WeatherView({ cities }: TProps) {
  return (
    <>
      <S.View>
        <S.WeatherLists>
          {cities && cities.map((city, index) => <WeatherList city={city} />)}
        </S.WeatherLists>
      </S.View>
    </>
  );
}
