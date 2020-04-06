import { connect } from 'react-redux';
import SearchSection from '../components/Search/SearchSection';
import { RouteState } from '../redux/modules/reducer';
import { addCitySaga } from '../redux/modules/search';

export default connect(
  (state: RouteState) => ({
    cities: state.search.cities,
  }),
  dispatch => ({
    addCity: (city: string) => {
      dispatch(addCitySaga(city));
    },
  }),
)(SearchSection);
