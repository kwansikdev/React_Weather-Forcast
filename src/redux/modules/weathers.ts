import { put, call, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { createAction, createActions, handleActions } from 'redux-actions';

const options = {
  prefix: 'weathers/',
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

export function* weathersSaga() {}

type initialStateType = {
  loading: boolean;
  error: null | {};
  current: {};
  fiveDays: {};
};

const initialState: initialStateType = {
  loading: false,
  error: null,
  current: {},
  fiveDays: {},
};

const weathers = handleActions(
  {
    PENDING: (state, action) => ({
      ...state,
      ...action.payload,
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

export default weathers;
