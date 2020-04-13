import { connect } from 'react-redux';
import ListsSection from '../components/Search/ListsSection';
import { RouteState } from '../redux/modules/reducer';
import { addListSaga } from '../redux/modules/weathers';

export default connect(
  (state: RouteState) => ({}),
  dispatch => ({
    addList: (city: string[]) => {
      dispatch(addListSaga(city));
    },
  }),
)(ListsSection);
