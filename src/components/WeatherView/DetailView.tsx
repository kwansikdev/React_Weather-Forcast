import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MenuList from './MenuList';
import WeatherDetail from './WeatherDetail';
import * as S from './Styled';

const DetailView: React.FC<RouteComponentProps> = ({ history }) => {
  function gotoAddMenu() {
    history.push('/weathers/add');
  }

  return (
    <S.DetailView>
      <S.MenuListsSection>
        <S.MenuListsUL>
          <MenuList />
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
        <WeatherDetail />
      </S.DetailSection>
    </S.DetailView>
  );
};

export default withRouter(DetailView);
