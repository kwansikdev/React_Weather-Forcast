import { combineReducers } from 'redux';
import weathers from './weathers';
import search from './search';

const reducer = () => {
  combineReducers({
    weathers,
    search,
  });
};

export default reducer;
