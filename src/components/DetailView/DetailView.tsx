import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MenuList from './MenuList';
import * as S from './Styled';
import WeatherDetail from './WeatherDetail';
import { currentWeahterType } from '../../Typescript/currentWeahterType';
import { City, List } from '../../Typescript/fiveDaysWeatherType';
import PlusButton from '../Common/PlusButton';
import Back from '../Common/Back';

type TProps = {
  status: boolean;
  current: string;
  fiveDays: any[];
  currentWeather: currentWeahterType;
  currentFiveDaysWeather: {
    city: City;
    weekend: List[];
  };
  currentCity: (city: string) => void;
};

const DetailView: React.FC<RouteComponentProps & TProps> = ({
  status,
  history,
  current,
  fiveDays,
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

  function gotoHome() {
    history.push('/');
  }

  return (
    <S.DetailView status={status}>
      <S.MenuListsSection>
        <S.MenuListsUL>
          {fiveDays &&
            fiveDays.map((city, index) => (
              <MenuList
                key={index}
                status={status}
                city={city.city.name}
                current={current}
                onClick={ListClick}
              />
            ))}
        </S.MenuListsUL>
        <S.ListAddMenu>
          <PlusButton
            status={status}
            onClick={gotoAddMenu}
            location={'detail'}
          />
        </S.ListAddMenu>
      </S.MenuListsSection>
      <S.DetailSection>
        <Back onClick={gotoHome} />
        <WeatherDetail
          status={status}
          currentWeather={currentWeather}
          currentFiveDaysWeather={currentFiveDaysWeather}
        />
      </S.DetailSection>
    </S.DetailView>
  );
};

export default withRouter(DetailView);
