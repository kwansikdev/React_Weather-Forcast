import {
  createReducer,
  createAction,
  ActionType,
  createAsyncAction,
} from 'typesafe-actions';
import { put, select, takeLatest, takeEvery } from 'redux-saga/effects';

const prefix: string = 'weathers/search/';

// 액션 및 액션 생성 함수 만들기
type TCities = {
  cities: string[];
};

const pending = `${prefix}PENDING`;
const success = `${prefix}SUCCESS`;
const fail = `${prefix}FAIL`;

export const actions = createAsyncAction(pending, success, fail)<
  undefined,
  string,
  undefined
>();

// ActionType 을 사용하여 모든 액션 객체들의 타입을 준비해줄 수 있다.
type SearchAction = ActionType<typeof actions>;

// saga 함수
export const addCitySaga = createAction(`${prefix}ADD_CITY_SAGA`)<string>();

export function* addCity({ payload }: ReturnType<typeof addCitySaga>) {
  const cities = yield select(state => state.search.cities);

  try {
    yield put(actions.request());
    yield put(actions.success(cities.push(payload.toUpperCase())));
  } catch {
    console.log(Error);
  }
}

//
export function* searchSaga() {
  yield takeLatest(addCitySaga, addCity);
}

// initialState
export type TInitialState = {
  loading: boolean;
  error: null | {};
  cities: string[];
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  cities: ['London'],
};

// Reducer
const search = createReducer(initialState, {
  pending: (state, action) => ({
    ...state,
    ...action.payload,
    loading: true,
    error: null,
  }),
  success: (state, action) => ({
    ...state,
    ...action.payload,
    loading: false,
    error: null,
  }),
  fail: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});

export default search;
