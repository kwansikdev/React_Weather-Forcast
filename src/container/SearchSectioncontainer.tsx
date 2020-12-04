import { connect } from 'react-redux';
import SearchSection from '../components/WeatherView/SearchSection';
import { RootState } from '../redux/modules/reducer';
import { addFiveDaysWeatherSaga, addListSaga } from '../redux/modules/weathers';

export default connect(
  (state: RootState) => ({
    status: state.common.status,
  }),
  dispatch => ({
    addList: (city: string) => {
      dispatch(addListSaga(city));
    },
    addFiveDaysWeather: (city: string) => {
      dispatch(addFiveDaysWeatherSaga(city));
    },
  }),
)(SearchSection);
