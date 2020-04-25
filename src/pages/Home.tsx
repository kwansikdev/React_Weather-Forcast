import React from 'react';
import WeatherViewContainer from '../container/WeatherViewContainer';
import HeaderContainer from '../container/HeaderContainer';

export default function Home() {
  return (
    <>
      <HeaderContainer />
      <WeatherViewContainer />
    </>
  );
}
