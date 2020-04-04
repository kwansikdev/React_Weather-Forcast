import { createReducer, createAction, ActionType } from 'typesafe-actions';
import { put, select, takeLatest } from 'redux-saga/effects';

const prefix: string = 'weathers/search/';

// 액션
const PENDING = `${prefix}PENDING`;
const SUCCESS = `${prefix}SUCCESS`;
const FAIL = `${prefix}FAIL`;

// 액션 생성 함수 만들기
export const pending = createAction(PENDING)();
export const success = createAction(SUCCESS)();
export const fail = createAction(FAIL)();

const actions = { pending, success, fail };

type Action = ActionType<typeof actions>;

// saga 함수
export const addCitySaga = createAction('ADD_CITY_SAGA');

function* addCity(city: string) {
  const cities = yield select(state => state.search.cities);

  try {
    yield put(pending());
    yield put(
      success({
        cities: [...cities, city],
      }),
    );
  } catch (error) {
    console.log(error);
  }
}

//
export function* searchSaga() {
  yield takeLatest('ADD_CITY_SAGA', addCity);
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
  cities: [],
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
