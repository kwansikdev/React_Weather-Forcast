import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MenuList from './MenuList';
import WeatherDetail from '../WeatherView/WeatherDetail';
import * as S from '../WeatherView/Styled';

type TProps = {
  cities: string[];
};

const DetailView: React.FC<RouteComponentProps & TProps> = ({
  cities,
  history,
}) => {
  function gotoAddMenu() {
    history.push('/weathers/add');
  }

  return (
    <S.DetailView>
      <S.MenuListsSection>
        <S.MenuListsUL>
          {cities &&
            cities.map((city, index) => <MenuList key={index} city={city} />)}
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
        {cities &&
          cities.map((city, index) => (
            <WeatherDetail key={index} city={city} />
          ))}
      </S.DetailSection>
    </S.DetailView>
  );
};

export default withRouter(DetailView);
