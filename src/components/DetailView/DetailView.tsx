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

  function ListClick(e: React.MouseEvent<HTMLLIElement>) {
    const selectList = e.currentTarget.children[0].innerHTML;

    console.log(selectList);
    // 선택한 리스트(나라)를 리덕스에 저장
    // 이 리스트(나라)와 날씨 데이터가 저장된 배열에서 나라이름과 비교해서 맞는 데이터를
    // 가가져온다
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
        <WeatherDetail city={current} />
      </S.DetailSection>
    </S.DetailView>
  );
};

export default withRouter(DetailView);
