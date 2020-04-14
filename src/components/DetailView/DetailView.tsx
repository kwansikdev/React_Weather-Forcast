import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MenuList from './MenuList';
import WeatherDetail from './WeatherDetail';
import * as S from '../WeatherView/Styled';

type TProps = {
  cityLists: string[];
};

const DetailView: React.FC<RouteComponentProps & TProps> = ({
  cityLists,
  history,
}) => {
  function gotoAddMenu() {
    history.push('/weathers/add');
  }

  return (
    <S.DetailView>
      <S.MenuListsSection>
        <S.MenuListsUL>
          {cityLists &&
            cityLists.map((city, index) => (
              <MenuList key={index} city={city} />
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
        {cityLists &&
          cityLists.map((city, index) => (
            <WeatherDetail key={index} city={city} />
          ))}
      </S.DetailSection>
    </S.DetailView>
  );
};

export default withRouter(DetailView);
