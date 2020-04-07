import { connect } from 'react-redux';
import { RouteState } from '../redux/modules/reducer';
import DetailView from '../components/WeatherView/DetailView';

export default connect(
  (state: RouteState) => ({
    cities: state.search.cities,
  }),
  dispatch => ({}),
)(DetailView);
