import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import ListCountry from './ListCountry';
import * as S from './Styled';
import { useSelector } from 'react-redux';
import { RouteState } from '../../redux/modules/reducer';

type TProps = {
  status: boolean;
};

const ListsSection: React.FC<RouteComponentProps & TProps> = ({
  status,
  history,
}) => {
  const cityLists = useSelector(
    (state: RouteState) => state.weathers.cityLists,
  );

  //
  const cityWeathers = useSelector(
    (state: RouteState) => state.weathers.city_weathers,
  );

  const goHome = () => {
    history.push('/');
  };

  return (
    <>
      <S.ListsSection status={status}>
        <S.ListsUl>
          {cityLists.map((city, index) => (
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
