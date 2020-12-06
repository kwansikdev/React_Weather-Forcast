import { connect } from 'react-redux';
import DetailView from '../components/DetailView';
import { RootState } from '../redux/modules/reducer';
import {
  addCurrentCitySaga,
  addFiveDaysWeatherSaga,
  addListSaga,
} from '../redux/modules/weathers';

export default connect(
  (state: RootState) => ({
    status: state.common.status,
    current: state.weathers.current,
    city_weathers: state.weathers.city_weathers,
    fiveDays: state.weathers.fiveDays,
    currentWeather: state.weathers.currentWeather,
    currentFiveDaysWeather: state.weathers.currentFiveDaysWeather,
  }),
  dispatch => ({
    currentCity: (city: string) => {
      dispatch(addCurrentCitySaga(city));
    },
    addList: (city: string) => {
      dispatch(addListSaga(city));
    },
    addFiveDaysWeather: (city: string) => {
      dispatch(addFiveDaysWeatherSaga(city));
    },
    addCurrentCity: (city: string) => {
      dispatch(addCurrentCitySaga(city));
    },
  }),
)(DetailView);
