import { connect } from 'react-redux';
import ListsSection from '../components/WeatherView/ListsSection';
import { RootState } from '../redux/modules/reducer';
import {
  addCurrentCitySaga,
  addFiveDaysWeatherSaga,
  addListSaga,
} from '../redux/modules/weathers';

export default connect(
  (state: RootState) => ({
    status: state.common.status,
    cityLists: state.weathers.cityLists,
  }),
  dispatch => ({
    addList: (city: string) => {
      dispatch(addListSaga(city));
    },
    addCurrentCity: (currentCity: string) => {
      dispatch(addCurrentCitySaga(currentCity));
    },
    addFiveDaysWeather: (currentCity: string) => {
      dispatch(addFiveDaysWeatherSaga(currentCity));
    },
  }),
)(ListsSection);
