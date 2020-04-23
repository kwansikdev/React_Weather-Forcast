import {
  createReducer,
  createAction,
  ActionType,
  createAsyncAction,
} from 'typesafe-actions';
import { put, call, select, takeLatest } from 'redux-saga/effects';
import WeatherServices from '../../services/WeatherServices';

const prefix: string = 'search/';

// 액션 및 액션 생성 함수 만들기
const pending = `${prefix}PENDING`;
const success = `${prefix}SUCCESS`;
const fail = `${prefix}FAIL`;

type TSuccess = {
  cities: string[];
};

type TSuccess_Weather = {
  city_weathers: any[];
};

export const actions = createAsyncAction(pending, success, fail)<
  undefined,
  TSuccess | TSuccess_Weather,
  undefined
>();

// ActionType 을 사용하여 모든 액션 객체들의 타입을 준비해줄 수 있다.
type SearchAction = ActionType<typeof actions>;

// saga 함수
export const addCitySaga = createAction(`${prefix}ADD_CITY_SAGA`)<string>();

function* addCity({ payload }: ReturnType<typeof addCitySaga>) {
  const cities = yield select(state => state.search.cities);
  const city_weathers = yield select(state => state.search.city_weathers);

  try {
    yield put(actions.request());
    yield put(
      actions.success({
        cities: [...cities, payload.toUpperCase()],
      }),
    );
    const { data } = yield call(WeatherServices.getCurrentWeather, payload);
    yield put(
      actions.success({
        city_weathers: [...city_weathers, data],
      }),
    );
  } catch {
    console.log(Error);
  }
}

//
export function* searchSaga() {
  yield takeLatest(addCitySaga, addCity);
}

// initialState
type TInitialState = {
  loading: boolean;
  error: null | {};
  cities: string[];
  city_weathers: [];
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  cities: [],
  city_weathers: [],
};

// Reducer
const search = createReducer<TInitialState>(initialState, {
  [pending]: state => ({
    ...state,
    loading: true,
    error: null,
  }),
  [success]: (state, action) => ({
    ...state,
    ...action.payload,
    loading: false,
    error: null,
  }),
  [fail]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
});

export default search;
