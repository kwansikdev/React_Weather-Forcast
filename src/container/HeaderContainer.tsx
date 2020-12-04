import { connect } from 'react-redux';
import { RootState } from '../redux/modules/reducer';
import { addThemeStatusSaga } from '../redux/modules/common';
import Header from '../components/Header';

export default connect(
  (state: RootState) => ({
    status: state.common.status,
  }),
  dispatch => ({
    addThemeStatus: (status: boolean) => {
      dispatch(addThemeStatusSaga(status));
    },
  }),
)(Header);
