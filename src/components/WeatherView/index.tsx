import React from 'react';
import * as S from './Styled';
import WeatherList from './WeaterList';
import { useSelector } from 'react-redux';
import { RouteState } from '../../redux/modules/reducer';
import { RouteComponentProps, withRouter } from 'react-router';
import PlusButton from '../Common/PlusButton';

type TProps = {
  status: boolean;
};

const WeatherView: React.FC<RouteComponentProps & TProps> = ({
  status,
  history,
}) => {
  const cityWeathers = useSelector(
    (state: RouteState) => state.weathers.city_weathers,
  );

  function gotoAddMenu() {
    history.push('/weathers/add');
  }

  return (
    <>
      <S.View status={status}>
        <S.WeatherLists>
          {cityWeathers &&
            cityWeathers.map((cityWeather, index) => (
              <WeatherList key={index} status={status} weather={cityWeather} />
            ))}
          <S.AddCountryCard onClick={gotoAddMenu}>
            <S.CountryCardButton status={status}>
              <p> ADD CITY</p>
              <PlusButton status={status} location={'home'} />
              <S.AddCityIcon src="/images/airballoon.svg" alt="도시추가" />
            </S.CountryCardButton>
          </S.AddCountryCard>
        </S.WeatherLists>
      </S.View>
    </>
  );
};

export default withRouter(WeatherView);
