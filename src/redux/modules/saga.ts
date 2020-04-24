import { all } from 'redux-saga/effects';
import { weathersSaga } from './weathers';
import { commonSaga } from './common';

export default function* rootSaga() {
  yield all([commonSaga(), weathersSaga()]);
}
