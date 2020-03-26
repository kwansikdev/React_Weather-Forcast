import React from 'react';
import * as S from './Styled';
import WeatherList from './WeaterList';

export default function WeatherView() {
  return (
    <>
      <S.View>
        <S.WeatherLists>
          <WeatherList />
          <WeatherList />
          <WeatherList />
          <WeatherList />
        </S.WeatherLists>
      </S.View>
    </>
  );
}
