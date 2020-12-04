import React from 'react';
import moment from 'moment';
import * as S from './Styled';
import { RootState } from '../../redux/modules/reducer';
import { useSelector } from 'react-redux';

export default function CurrentTime() {
  const status = useSelector((state: RootState) => state.common.status);

  return (
    <S.CurrentTime status={status}>
      <S.Data>{moment().format('MMM Do YY')},</S.Data>
      <S.Day>{moment().format('LT')}</S.Day>
    </S.CurrentTime>
  );
}
