import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MenuList from './MenuList';
import * as S from '../WeatherView/Styled';
import WeatherDetail from './WeatherDetail';

type TProps = {
  cityLists: string[];
  current: string;
};

const DetailView: React.FC<RouteComponentProps & TProps> = ({
  cityLists,
  history,
  current,
}) => {
  function gotoAddMenu() {
    history.push('/weathers/add');
  }

  // 메뉴 라스트 클릭했을시 리덕스 weather의 current 값을 바꾼다
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
        <WeatherDetail city={current} />
      </S.DetailSection>
    </S.DetailView>
  );
};

export default withRouter(DetailView);
