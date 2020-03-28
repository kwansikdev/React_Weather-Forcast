import React from 'react';
import * as S from './Styled';
import { withRouter, RouteComponentProps } from 'react-router';

const ListsSection: React.FC<RouteComponentProps> = ({ history }) => {
  const goView = () => {
    history.push('/');
  };

  return (
    <>
      <S.ListsSection>
        <S.ListsUl>
          <S.ListLi>
            <S.ListButton>
              <S.ListCountry>LONDON</S.ListCountry>
              <S.ListTem>
                <S.ListTemLow>최저 10</S.ListTemLow>
                <S.ListTemHigh>최고 23</S.ListTemHigh>
              </S.ListTem>
            </S.ListButton>
          </S.ListLi>
        </S.ListsUl>
        <S.GotoView onClick={goView}>
          <img src="/images/next.svg" alt="메인으로 이동" />
        </S.GotoView>
      </S.ListsSection>
    </>
  );
};

export default withRouter(ListsSection);
