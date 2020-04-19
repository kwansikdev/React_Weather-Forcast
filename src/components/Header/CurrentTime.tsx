import React from 'react';
import * as S from './Styled';
import { RouteState } from '../../redux/modules/reducer';
import { useSelector } from 'react-redux';

export default function CurrentTime() {
  const status = useSelector((state: RouteState) => state.common.status);
  const today = new Date();

  const dataString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  return (
    <S.CurrentTime status={status}>
      <S.Data>{dataString}</S.Data>
      <S.Day>{dayName}</S.Day>
    </S.CurrentTime>
  );
}
