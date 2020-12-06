import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import ListCountry from './ListCountry';
import * as S from '../WeatherView/Styled';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/modules/reducer';
import A11yTitle from '../Common/A11yTitle';

type TProps = {
  status: boolean;
  cityLists: string[];
  addCurrentCity: (currentCity: string) => void;
  addFiveDaysWeather: (currentCity: string) => void;
};

const ListsSection: React.FC<RouteComponentProps & TProps> = ({
  status,
  cityLists,
  history,
  addCurrentCity,
  addFiveDaysWeather,
}) => {
  const cityWeathers = useSelector(
    (state: RootState) => state.weathers.city_weathers,
  );

  return (
    <>
      <S.ListsDiv>
        <A11yTitle>weather list</A11yTitle>
        <S.ListsUl>
          {cityLists.map((city, index) => (
            <ListCountry
              key={index}
              city={city}
              weather={cityWeathers[index]}
              addCurrentCity={addCurrentCity}
              addFiveDaysWeather={addFiveDaysWeather}
            />
          ))}
        </S.ListsUl>
      </S.ListsDiv>
    </>
  );
};

export default withRouter(ListsSection);
