import { put, call, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { createAction, createActions, handleActions } from 'redux-actions';

const options = {
  prefix: 'weather-forecast/search',
  namespace: '/',
};

const { success, pending, fail } = createActions(
  {
    SUCCESS: (weather: any) => ({ weather }),
  },
  'PENDING',
  'FAIL',
  options,
);

export const addCitySaga = createAction('add_city_SAGA');

function* addCity({ payload }) {
  try {
    yield put(pending());
    console.log();
  } catch (error) {
    console.log(error);
  }
}

export function* searchSaga() {}

type initialStateType = {
  loading: boolean;
  error: null | {};
  city: string[];
};

const initialState: initialStateType = {
  loading: false,
  error: null,
  city: [],
};

const search = handleActions(
  {
    PENDING: (state, action) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      ...state,
      ...action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  options,
);

export default search;
