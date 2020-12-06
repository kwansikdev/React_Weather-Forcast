import { connect } from 'react-redux';
import WeatherView from '../components/WeatherView';
import { RootState } from '../redux/modules/reducer';

export default connect(
  (state: RootState) => ({
    status: state.common.status,
  }),
  dispatch => ({}),
)(WeatherView);
