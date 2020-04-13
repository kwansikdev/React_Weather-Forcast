import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import ListCountry from './ListCountry';
import * as S from './Styled';
import { useSelector } from 'react-redux';
import { RouteState } from '../../redux/modules/reducer';

type TProps = {
  addList: (cities: string[]) => void;
};

const ListsSection: React.FC<RouteComponentProps & TProps> = ({
  history,
  addList,
}) => {
  const cities = useSelector((state: RouteState) => state.search.cities);

  //
  const cityWeathers = useSelector(
    (state: RouteState) => state.search.city_weathers,
  );

  const goHome = () => {
    history.push('/');
    addList(cities);
  };

  return (
    <>
      <S.ListsSection>
        <S.ListsUl>
          {cities.map((city, index) => (
            <ListCountry
              key={index}
              city={city}
              weather={cityWeathers[index]}
            />
          ))}
        </S.ListsUl>
        <S.GotoView onClick={goHome}>
          <img src="/images/next.svg" alt="메인으로 이동" />
        </S.GotoView>
      </S.ListsSection>
    </>
  );
};

export default withRouter(ListsSection);
