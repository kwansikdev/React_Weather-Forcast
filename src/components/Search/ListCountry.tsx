import React, { createRef } from 'react';
import * as S from './Styled';
import { currentWeahterType } from '../../Typescript/currentWeahterType';
import RemoveButton from '../Common/RemoveButton';
import { useDispatch, useSelector } from 'react-redux';
import { removeCitySaga } from '../../redux/modules/weathers';
import { RouteState } from '../../redux/modules/reducer';
type TProps = {
  city: string;
  weather: currentWeahterType;
};

export default function ListCountry({ city, weather }: TProps) {
  const cityName: any = createRef();
  const dispatch = useDispatch();
  const status = useSelector((state: RouteState) => state.common.status);

  const weatherInfo = {
    name: weather && weather.name,
    min: weather && (weather.main.temp_min - 275.15).toFixed(1),
    max: weather && (weather.main.temp_max - 275.15).toFixed(1),
  };

  const removeCard = () => {
    // 사가함수 하나로 합치기
    dispatch(removeCitySaga(cityName.current.innerHTML));
  };

  return (
    <>
      <S.ListLi>
        <RemoveButton
          status={status}
          onClick={removeCard}
          size={'12'}
          where="search"
        />
        <S.ListButton>
          <S.ListCountry ref={cityName}>{weatherInfo.name}</S.ListCountry>
          <S.ListTem>
            <S.ListTemLow>최저 {weatherInfo.min}</S.ListTemLow>
            <S.ListTemHigh>최고 {weatherInfo.max}</S.ListTemHigh>
          </S.ListTem>
        </S.ListButton>
      </S.ListLi>
    </>
  );
}
