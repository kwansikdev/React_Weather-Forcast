import React from 'react';
import * as S from './Styled';
type TProps = {
  city: string;
};

export default function ListCountry({ city }: TProps) {
  return (
    <S.ListLi>
      <S.ListButton>
        <S.ListCountry>{city}</S.ListCountry>
        <S.ListTem>
          <S.ListTemLow>최저 10</S.ListTemLow>
          <S.ListTemHigh>최고 23</S.ListTemHigh>
        </S.ListTem>
      </S.ListButton>
    </S.ListLi>
  );
}
