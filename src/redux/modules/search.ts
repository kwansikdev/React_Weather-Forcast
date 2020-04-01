import { createReducer, createAction, ActionType } from 'typesafe-actions';

import { takeLatest } from 'redux-saga/effects';

const prefix: string = 'weathers/search/';

// 액션
const PENDING = `${prefix}PENDING`;
const SUCCESS = `${prefix}SUCCESS`;
const FAIL = `${prefix}FAIL`;

// 액션 생성 함수 만들기
export const pending = createAction(PENDING)();
export const success = createAction(SUCCESS)<string>();
export const fail = createAction(FAIL)();

const actions = { pending, success, fail };

type Action = ActionType<typeof actions>;

// saga 함수

//
export function* searchSaga() {
  // yield takeLatest('GET_SESSION_SAGA', createSession);
}

// initialState
export type TInitialState = {
  loading: boolean;
  error: null | {};
  city: string[];
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  city: [],
};

// Reducer
const search = createReducer<TInitialState>(initialState, {
  [PENDING]: (state, action) => ({
    ...state,
    ...action.payload,
    loading: true,
    error: null,
  }),
  [SUCCESS]: (state, action) => ({
    ...state,
    ...action.payload,
    loading: false,
    error: null,
  }),
  [FAIL]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});

export default search;
