import { all } from 'redux-saga/effects';
import { searchSaga } from './search';
import { weathersSaga } from './weathers';
import { commonSaga } from './common';

export default function* rootSaga() {
  yield all([commonSaga(), searchSaga(), weathersSaga()]);
}
