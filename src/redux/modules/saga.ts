import { all } from 'redux-saga/effects';
import { searchSaga } from './search';
import { weathersSaga } from './weathers';

export default function* rootSaga() {
  yield all([searchSaga(), weathersSaga()]);
}
