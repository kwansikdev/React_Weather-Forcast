import { connect } from 'react-redux';
import SearchSection from '../components/Search/SearchSection';
import { RouteState } from '../redux/modules/reducer';
import { addFiveDaysWeatherSaga, addListSaga } from '../redux/modules/weathers';

export default connect(
  (state: RouteState) => ({
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
