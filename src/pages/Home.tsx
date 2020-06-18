import React from 'react';
import WeatherViewContainer from '../container/WeatherViewContainer';
import HeaderContainer from '../container/HeaderContainer';
import * as S from './Styled';

export default function Home() {
  return (
    <S.Layout>
      <HeaderContainer />
      <WeatherViewContainer />
    </S.Layout>
  );
}
