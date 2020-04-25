import { connect } from 'react-redux';
import { RouteState } from '../redux/modules/reducer';
import DetailView from '../components/DetailView/DetailView';
import { addCurrentCitySaga } from '../redux/modules/weathers';

export default connect(
  (state: RouteState) => ({
    status: state.common.status,
    cityLists: state.weathers.cityLists,
    current: state.weathers.current,
    fiveDays: state.weathers.fiveDays,
    currentWeather: state.weathers.currentWeather,
    currentFiveDaysWeather: state.weathers.currentFiveDaysWeather,
  }),
  dispatch => ({
    currentCity: (city: string) => {
      dispatch(addCurrentCitySaga(city));
    },
  }),
)(DetailView);
