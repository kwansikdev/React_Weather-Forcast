import React from 'react';
import * as S from './Styled';
import WeatherList from './WeaterList';
import { useSelector } from 'react-redux';
import { RouteState } from '../../redux/modules/reducer';
import { RouteComponentProps, withRouter } from 'react-router';
import PlusButton from '../Common/PlusButton';

type TProps = {
  cities: string[];
  status: boolean;
  currentCity: (city: string) => void;
};

const WeatherView: React.FC<RouteComponentProps & TProps> = ({
  cities,
  status,
  currentCity,
  history,
}) => {
  const cityWeathers = useSelector(
    (state: RouteState) => state.search.city_weathers,
  );

  function addList(city: string) {
    currentCity(city);
  }

  function gotoAddMenu() {
    history.push('/weathers/add');
  }

  return (
    <>
      <S.View status={status}>
        <S.WeatherLists>
          {cities &&
            cities.map((city, index) => (
              <WeatherList
                key={index}
                status={status}
                weather={cityWeathers[index]}
                onClick={() => addList(city)}
              />
            ))}
          <S.AddCountryCard onClick={gotoAddMenu}>
            <S.CountryCardButton status={status}>
              <p> ADD CITY</p>
              <PlusButton status={status} />
              <S.AddCityIcon src="/images/airballoon.svg" alt="도시추가" />
            </S.CountryCardButton>
          </S.AddCountryCard>
        </S.WeatherLists>
      </S.View>
    </>
  );
};

export default withRouter(WeatherView);
