import { connect } from 'react-redux';
import SearchSection from '../components/Search/SearchSection';
import { RouteState } from '../redux/modules/reducer';
import { addCitySaga } from '../redux/modules/search';
import { addFiveDaysWeatherSaga } from '../redux/modules/weathers';

export default connect(
  (state: RouteState) => ({}),
  dispatch => ({
    addCity: (city: string) => {
      dispatch(addCitySaga(city));
    },
    addFiveDaysWeather: (city: string) => {
      dispatch(addFiveDaysWeatherSaga(city));
    },
  }),
)(SearchSection);
