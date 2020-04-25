import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../Theme';

type TStatus = {
  status: boolean;
};

// Detaul View
export const DetailView = styled.div`
  display: flex;
  background: ${({ status }: TStatus) =>
    status ? darkTheme.listGradient : lightTheme.gradient};
`;

export const MenuListsSection = styled.section`
  position: relative;
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
  margin: 30px auto 0 auto;
  background: #eee;
  width: 75px;
  border-radius: 50%;
  height: 75px;
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
  width: 88vw;
  height: 93.5vh;
  padding: 32px 32px 50px 32px;
`;

// Detail Weather Box
export const DetailBox = styled.div`
  height: 100%;
`;

export const DetailWeatherBox = styled.div`
  background: ${({ status }: TStatus) =>
    status ? darkTheme.listColor : lightTheme.gradient2};
  display: flex;
  height: 50%;
  padding: 32px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: ${({ status }: TStatus) => (status ? darkTheme.color : `#eee`)};
`;

export const ConditionBox = styled.div`
  width: 50%;
  padding: 30px;
`;

export const TempBox = styled.div`
  text-align: center;

  p {
    font-size: 9.6rem;
  }

  span {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 10px;
  }
`;

export const HumWindBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
  font-size: 1.4rem;
`;

export const HumidityInfo = styled.div`
  width: 30%;
  text-align: center;
  padding-right: 20px;
  border-right: 1px solid #fff;

  span {
    display: block;
    margin-top: 5px;
  }
`;

export const WindInfo = styled.div`
  width: 30%;
  text-align: center;
  padding-left: 20px;
  border-left: 1px solid #fff;

  span {
    display: block;
    margin-top: 5px;
  }
`;

export const CityBox = styled.div`
  position: relative;
  width: 50%;
  padding: 30px;
`;

export const CityName = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  /* margin-top: 40px; */
  text-align: center;
  font-size: 3rem;

  span {
    padding-bottom: 10px;
    box-shadow: 0 4px 0 0 #fff;
  }
`;

//Detail Forecast Box
export const DetailForecastBox = styled.div`
  background: #fff8fb;
  height: 50%;
  padding: 32px;
  border-top: ${({ status }: TStatus) => status && `1px solid #616161`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: ${({ status }: TStatus) => status && darkTheme.listColor};
`;

export const ForecastLists = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 100%;
  margin: 0 auto;
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

// ForcastList

export const ForecastListLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 13%;
  height: 100%;
  padding: 10px 0;
  text-align: center;
  color: ${({ status }: TStatus) => (status ? darkTheme.color : `#39437a`)};
  font-size: 2rem;
`;

export const ForecastDate = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
`;

export const ForecastWeather = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100px;
    margin: auto;
  }

  span {
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 5px;
  }

  img + span {
    margin-top: 10px;
  }
`;

export const ForecastTemp = styled.p`
  font-size: 2.2rem;
`;
