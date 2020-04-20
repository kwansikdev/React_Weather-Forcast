import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MenuList from './MenuList';
import * as S from '../WeatherView/Styled';
import WeatherDetail from './WeatherDetail';
import { currentWeahterType } from '../../Type/currentWeahterType';
import { List, City } from '../../Type/fiveDaysWeatherType';

type TProps = {
  cityLists: string[];
  current: string;
  currentWeather: currentWeahterType;
  currentFiveDaysWeather: {
    city: City;
    weekend: List[];
  };
  currentCity: (city: string) => void;
};

const DetailView: React.FC<RouteComponentProps & TProps> = ({
  cityLists,
  history,
  current,
  currentFiveDaysWeather,
  currentCity,
  currentWeather,
}) => {
  function gotoAddMenu() {
    history.push('/weathers/add');
  }

  function ListClick(e: React.MouseEvent<HTMLLIElement>) {
    const selectList = e.currentTarget.children[0].innerHTML;

    currentCity(selectList);
  }

  return (
    <S.DetailView>
      <S.MenuListsSection>
        <S.MenuListsUL>
          {cityLists &&
            cityLists.map((city, index) => (
              <MenuList
                key={index}
                city={city}
                current={current}
                onClick={ListClick}
              />
            ))}
        </S.MenuListsUL>
        <S.ListAddMenu>
          <S.ListAddButton onClick={gotoAddMenu}>
            <img src="/images/plus.svg" alt="도시추가" />
          </S.ListAddButton>
        </S.ListAddMenu>
      </S.MenuListsSection>
      <S.DetailSection>
        {/* <S.BackButton>
          <S.ButtonCircle />
        </S.BackButton> */}
        <WeatherDetail
          city={current}
          currentWeather={currentWeather}
          currentFiveDaysWeather={currentFiveDaysWeather}
        />
      </S.DetailSection>
    </S.DetailView>
  );
};

export default withRouter(DetailView);
