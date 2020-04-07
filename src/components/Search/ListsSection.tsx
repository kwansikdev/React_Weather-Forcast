import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import ListCountry from './ListCountry';
import * as S from './Styled';

type TProps = {
  cities: string[];
};

const ListsSection: React.FC<RouteComponentProps & TProps> = ({
  cities,
  history,
}) => {
  const goHome = () => {
    history.push('/');
  };

  return (
    <>
      <S.ListsSection>
        <S.ListsUl>
          {cities.map((city, index) => (
            <ListCountry key={index} city={city} />
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
