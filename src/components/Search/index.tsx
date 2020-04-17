import React from 'react';
import { useSelector } from 'react-redux';
import { RouteState } from '../../redux/modules/reducer';
import SearchSectionContainer from '../../container/SearchSectioncontainer';
import ListsSectionContainer from '../../container/ListsSectionContainer';
import * as S from './Styled';

export default function Search() {
  const status = useSelector((state: RouteState) => state.common.status);
  return (
    <S.AddDiv status={status}>
      <SearchSectionContainer />
      <ListsSectionContainer />
    </S.AddDiv>
  );
}
