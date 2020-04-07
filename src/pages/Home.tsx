import React from 'react';
import Header from '../components/Header';
import WeatherViewContainer from '../container/WeatherViewContainer';

export default function Home() {
  return (
    <>
      <Header />
      <WeatherViewContainer />
    </>
  );
}
