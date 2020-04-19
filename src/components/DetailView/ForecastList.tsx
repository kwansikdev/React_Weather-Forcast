import React from 'react';
import styled from 'styled-components';

const ForecastListLi = styled.li`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%;
  height: 100%;
  padding: 10px 0;
  border-radius: 20px;
  color: #39437a;
  text-align: center;
  font-size: 2rem;
`;

const ForecastDate = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
`;

const ForecastWeather = styled.div`
  display: flex;
  flex-direction: column;

  img {
  }

  span {
    font-size: 1.6rem;
    text-transform: uppercase;
  }
`;

const ForecastTemp = styled.p`
  font-size: 2.2rem;
`;

type TProps = {
  day: {};
};

export default function ForecastList({ day }: TProps) {
  return (
    <ForecastListLi>
      <ForecastDate>Mon</ForecastDate>
      <ForecastWeather>
        <img src="" alt="날씨" />
        <span>clouds</span>
      </ForecastWeather>
      <ForecastTemp>12°</ForecastTemp>
    </ForecastListLi>
  );
}
