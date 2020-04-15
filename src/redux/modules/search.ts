import {
  createReducer,
  createAction,
  ActionType,
  createAsyncAction,
} from 'typesafe-actions';
import { put, call, select, takeLatest, takeEvery } from 'redux-saga/effects';
import WeatherServices from '../../services/WeatherServices';
import { currentWeahterType } from '../../Type/currentWeahterType';

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

export function* addCity({ payload }: ReturnType<typeof addCitySaga>) {
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
export type TInitialState = {
  loading: boolean;
  error: null | {};
  cities: string[];
  city_weathers: [currentWeahterType];
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  cities: ['seoul'],
  city_weathers: [
    {
      coord: {
        lon: 126.98,
        lat: 37.57,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      base: 'stations',
      main: {
        temp: 279.78,
        feels_like: 276.82,
        temp_min: 278.15,
        temp_max: 281.15,
        pressure: 1024,
        humidity: 65,
      },
      visibility: 10000,
      wind: {
        speed: 1.5,
        deg: 170,
      },
      clouds: {
        all: 1,
      },
      dt: 1586447042,
      sys: {
        type: 1,
        id: 8117,
        country: 'KR',
        sunrise: 1586466247,
        sunset: 1586512933,
      },
      timezone: 32400,
      id: 1835848,
      name: 'Seoul',
      cod: 200,
    },
  ],
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
