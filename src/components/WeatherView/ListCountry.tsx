import React, { createRef, useCallback } from 'react';
import * as S from './Styled';
import { currentWeahterType } from '../../Typescript/currentWeahterType';
import RemoveButton from '../Common/RemoveButton';
import { useDispatch } from 'react-redux';
import { removeCitySaga } from '../../redux/modules/weathers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from '../Common/Icons';
import { RouteComponentProps, withRouter } from 'react-router-dom';

type TProps = {
  city: string;
  weather: currentWeahterType;
  addCurrentCity: (currentCity: string) => void;
  addFiveDaysWeather: (currentCity: string) => void;
};

const ListCountry: React.FC<RouteComponentProps & TProps> = ({
  history,
  city,
  weather,
  addCurrentCity,
  addFiveDaysWeather,
}) => {
  const cityName: any = createRef();
  const dispatch = useDispatch();

  const weatherInfo = {
    name: weather && weather.name.toUpperCase(),
    temp: weather && (weather.main.temp - 275.15).toFixed(0),
    weatherStatus: weather && weather.weather[0].main,
    min: weather && (weather.main.temp_min - 275.15).toFixed(1),
    max: weather && (weather.main.temp_max - 275.15).toFixed(1),
  };

  const removeCard = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      // 사가함수 하나로 합치기
      e.stopPropagation();
      dispatch(removeCitySaga(cityName.current.innerHTML));
    },
    [cityName, dispatch],
  );

  const gotoDetail = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      e.stopPropagation();

      addCurrentCity(cityName.current.innerHTML);
      addFiveDaysWeather(cityName.current.innerHTML);

      history.push(`weathers/view?city=${weatherInfo.name.toLowerCase()}`);
    },
    [addCurrentCity, addFiveDaysWeather, cityName, history, weatherInfo.name],
  );

  return (
    <>
      <S.ListLi onClick={gotoDetail}>
        <RemoveButton onClick={removeCard} size={'16'} where="search" />
        <S.InfoDiv>
          <S.TempInfoDiv>
            <p>{weatherInfo.temp}°</p>
            <p>{weatherInfo.weatherStatus}</p>
          </S.TempInfoDiv>
          <S.CityInfoDiv>
            <h3>
              <S.CityName ref={cityName}>{weatherInfo.name}</S.CityName>
              <FontAwesomeIcon
                icon={icon(weatherInfo.weatherStatus)}
                style={{ fontSize: '3.2rem', color: '#fff' }}
              />
            </h3>
            <S.ListTemp>
              <S.ListTempHigh>H {weatherInfo.max}°</S.ListTempHigh>
              <S.ListTempLog>L {weatherInfo.min}°</S.ListTempLog>
            </S.ListTemp>
          </S.CityInfoDiv>
          <S.ViewDetailButton>View Detail</S.ViewDetailButton>
        </S.InfoDiv>
      </S.ListLi>
    </>
  );
};

export default withRouter(ListCountry);
