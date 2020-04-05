import { connect } from 'react-redux';
import ListsSection from '../components/Search/ListsSection';
import { RouteState } from '../redux/modules/reducer';

export default connect(
  (state: RouteState) => ({
    cities: state.search.cities,
  }),
  dispatch => ({}),
)(ListsSection);
