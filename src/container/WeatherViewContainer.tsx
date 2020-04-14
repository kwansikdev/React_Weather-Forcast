import { connect } from 'react-redux';
import WeatherView from '../components/WeatherView';
import { RouteState } from '../redux/modules/reducer';
import { addCurrentCitySaga } from '../redux/modules/weathers';

export default connect(
  (state: RouteState) => ({
    cities: state.search.cities,
  }),
  dispatch => ({
    currentCity: (city: string) => {
      dispatch(addCurrentCitySaga(city));
    },
  }),
)(WeatherView);
