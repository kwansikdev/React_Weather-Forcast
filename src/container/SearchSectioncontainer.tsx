import { connect } from 'react-redux';
import SearchSection from '../components/Search/SearchSection';
import { RouteState } from '../redux/modules/reducer';

export default connect(
  (state: RouteState) => ({
    cities: state.search.cities,
  }),
  dispatch => ({}),
)(SearchSection);
