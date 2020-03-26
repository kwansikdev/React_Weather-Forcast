import styled, { css } from 'styled-components';

export const View = styled.div`
  /* height: 100%; */
  background: linear-gradient(to top, #86dbff 0, #e0c3fc 100%);
  padding: 45px 45px 0 45px;
`;

export const WeatherLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  /* height: 100%; */
  /* margin: 0 15px; */
`;

export const WeatherList = styled.li`
  width: 432px;
  /* height: 500px; */
  /* margin: 15px; */
  padding: 32px;
`;

export const WeatherButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 32px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  section {
    margin-top: 25px;
  }
`;

export const ItemTitle = styled.p`
  font-size: 2rem;
`;

export const CurrentWeatherIcon = styled.div`
  background: yellow;
  width: 160px;
  height: 200px;
  margin-top: 25px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CurrentWeather = styled.section`
  display: flex;
  flex-direction: column;
`;

export const CurrentTemp = styled.p`
  background: gray;
  font-size: 4.8rem;
`;

export const CurrentStatus = styled.p`
  background: pink;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
`;

export const ItemTemp = styled.section`
  background: green;
  display: flex;

  div + div {
    margin-left: 100px;
  }

  img {
    width: 20px;
    height: 20px;
  }

  p {
    font-size: 3.2rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

export const ItemTempLow = styled.div`
  span {
    color: #00ff9b;
  }
`;

export const ItemTempHigh = styled.div`
  span {
    color: #ff0000;
  }
`;
