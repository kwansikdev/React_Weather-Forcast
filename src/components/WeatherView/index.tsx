import React from 'react';
import Clock from 'react-live-clock';

import SearchSectioncontainer from '../../container/SearchSectioncontainer';
import ListsSectionContainer from '../../container/ListsSectionContainer';

import * as S from './Styled';

const WeatherView = () => {
  return (
    <>
      <S.WeatherViewLayout>
        <S.WeatherViewSection>
          <S.InfoArea>
            <h2>
              Hello,
              <br /> WEACAST!
            </h2>
            <SearchSectioncontainer />
          </S.InfoArea>
          <S.Timezone>
            <Clock
              format={'dddd MMMM Mo YYYY h:mm:ss A'}
              ticking={true}
              timezone={'Asia/Seoul'}
            />
          </S.Timezone>
        </S.WeatherViewSection>
        <ListsSectionContainer />
      </S.WeatherViewLayout>
    </>
  );
};

export default WeatherView;
