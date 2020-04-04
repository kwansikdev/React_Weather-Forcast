import { connect } from 'react-redux';
import SearchSection from '../components/Search/SearchSection';
import { addCitySaga } from '../redux/modules/search';

export default connect(
  state => ({
    city: state.search.city,
  }),
  dispatch => ({
    addCity: () => {
      dispatch(addCitySaga(city));
    },
  }),
)(SearchSection);
