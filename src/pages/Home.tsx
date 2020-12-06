import React from 'react';
import WeatherViewContainer from '../container/WeatherViewContainer';
import Layout from '../components/Common/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        <WeatherViewContainer />
      </Layout>
    </>
  );
}
