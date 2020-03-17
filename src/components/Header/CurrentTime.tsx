import React from 'react';
import * as S from './Styled';

export default function CurrentTime() {
  const today = new Date();

  const dataString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });
  console.log(dataString);
  console.log(dayName);
  return (
    <S.CurrentTime>
      {dataString}
      {dayName}
    </S.CurrentTime>
  );
}
