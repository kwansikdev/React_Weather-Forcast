import { connect } from 'react-redux';
import { RouteState } from '../redux/modules/reducer';
import { addThemeStatusSaga } from '../redux/modules/common';
import Header from '../components/Header';

export default connect(
  (state: RouteState) => ({
    status: state.common.status,
  }),
  dispatch => ({
    addThemeStatus: (status: boolean) => {
      dispatch(addThemeStatusSaga(status));
    },
  }),
)(Header);
