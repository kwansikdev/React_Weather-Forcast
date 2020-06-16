import React from 'react';
import moment from 'moment';
import * as S from './Styled';
import { RouteState } from '../../redux/modules/reducer';
import { useSelector } from 'react-redux';

export default function CurrentTime() {
  const status = useSelector((state: RouteState) => state.common.status);
  // const today = new Date();

  // const dataString = today.toLocaleDateString('en', {
  //   // year: 'numeric',
  //   month: 'long',
  //   day: 'numeric',
  // });

  // const dayName = today.toLocaleDateString('en', {
  //   weekday: 'long',
  // });

  // const time = today.toTimeString().slice(0, 5);

  return (
    <S.CurrentTime status={status}>
      <S.Data>{moment().format('MMM Do YY')},</S.Data>
      <S.Day>{moment().format('LT')}</S.Day>
    </S.CurrentTime>
  );
}
