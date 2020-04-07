import { connect } from 'react-redux';
import WeatherView from '../components/WeatherView';
import { RouteState } from '../redux/modules/reducer';

export default connect(
  (state: RouteState) => ({
    cities: state.search.cities,
  }),
  dispatch => ({}),
)(WeatherView);
