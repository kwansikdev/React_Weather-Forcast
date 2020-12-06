import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import * as S from './Styled';
import WeatherDetail from './WeatherDetail';
import { currentWeahterType } from '../../Typescript/currentWeahterType';
import { City, List } from '../../Typescript/fiveDaysWeatherType';
import Back from '../Common/Back';
import ForecastList from './ForecastList';
import moment from 'moment';

type TProps = {
  status: boolean;
  current: string;
  currentWeather: currentWeahterType;
  currentFiveDaysWeather: {
    city: City;
    weekend: List[];
  };
};

const DetailView: React.FC<RouteComponentProps & TProps> = ({
  status,
  history,
  currentFiveDaysWeather,
  currentWeather,
}) => {
  function gotoHome() {
    history.push('/');
  }

  return (
    <S.DetailView>
      <Back onClick={gotoHome} />
      <WeatherDetail currentWeather={currentWeather} />
      <ForecastList
        status={status}
        currentFiveDaysWeather={currentFiveDaysWeather}
      />
      <S.TimeInfo>
        {moment(
          currentFiveDaysWeather &&
            currentFiveDaysWeather.weekend[0] &&
            currentFiveDaysWeather.weekend[0].dt_txt,
        ).format('LT')}{' '}
        기준
      </S.TimeInfo>
    </S.DetailView>
  );
};

export default withRouter(DetailView);
