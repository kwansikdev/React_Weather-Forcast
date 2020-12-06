import React from 'react';
import * as S from './Styled';
import SearchSectioncontainer from '../../container/SearchSectioncontainer';
import ListsSectionContainer from '../../container/ListsSectionContainer';

const WeatherView = () => {
  return (
    <>
      <S.WeatherView>
        <S.InfoArea>
          <h2>
            Hello,
            <br /> WEACAST !
          </h2>
          <SearchSectioncontainer />
        </S.InfoArea>
        <ListsSectionContainer />
      </S.WeatherView>
    </>
  );
};

export default WeatherView;
