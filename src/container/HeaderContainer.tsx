import { connect } from 'react-redux';
import { RouteState } from '../redux/modules/reducer';
import { addThemeStatusSaga } from '../redux/modules/common';
import Header from '../components/Header';

export default connect(
  (state: RouteState) => ({}),
  dispatch => ({
    addThemeStatus: (status: boolean) => {
      dispatch(addThemeStatusSaga(status));
    },
  }),
)(Header);
