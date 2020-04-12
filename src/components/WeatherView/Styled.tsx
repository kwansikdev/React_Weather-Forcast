import styled, { css } from 'styled-components';

// Weather View
export const View = styled.div`
  background: linear-gradient(to top, #86dbff 0, #e0c3fc 100%);
  padding: 0 45px;
  min-height: 93.2vh;
`;

export const WeatherLists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const WeatherList = styled.li`
  width: 432px;
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
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 5px;
`;

export const CurrentWeatherIcon = styled.div`
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
  font-size: 4.8rem;
`;

export const CurrentStatus = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  letter-spacing: 5px;
`;

export const ItemTemp = styled.section`
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

// Detaul View
export const DetailView = styled.div`
  display: flex;
`;

export const MenuListsSection = styled.section`
  position: relative;
  background: linear-gradient(to top, #86dbff 0, #e0c3fc 100%);
  width: 12vw;
  height: 93.5vh;
  padding: 32px 0 50px 32px;
  text-align: center;
`;

export const MenuListsUL = styled.ul`
  width: 100%;
  overflow-y: auto;
`;

export const ListAddMenu = styled.div`
  margin-top: 30px;
`;

export const ListAddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  img {
    width: 35px;
    height: 35px;
  }
`;

export const AddModal = styled.div`
  position: absolute;
`;

export const DetailSection = styled.section`
  position: relative;
  background: linear-gradient(to top, #86dbff 0, #e0c3fc 100%);
  width: 88vw;
  height: 93.5vh;
  padding: 32px 32px 50px 32px;
`;

export const BackButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
`;

export const ButtonCircle = styled.div`
  background: #2b244d;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const BackArrow = styled.div``;
