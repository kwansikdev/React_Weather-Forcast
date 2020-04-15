import { connect } from 'react-redux';
import { RouteState } from '../redux/modules/reducer';
import DetailView from '../components/DetailView/DetailView';

export default connect(
  (state: RouteState) => ({
    cityLists: state.weathers.cityLists,
    current: state.weathers.current,
  }),
  dispatch => ({}),
)(DetailView);
