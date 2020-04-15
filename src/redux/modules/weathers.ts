import {
  createReducer,
  createAction,
  ActionType,
  createAsyncAction,
} from 'typesafe-actions';
import { put, call, select, takeLatest, takeEvery } from 'redux-saga/effects';
import WeatherServices from '../../services/WeatherServices';

const prefix: string = 'weathers/';

const pending = `${prefix}PENDING`;
const success = `${prefix}SUCCESS`;
const fail = `${prefix}FAIL`;

type TSuccess_cityLists = {
  cityLists: string[];
};

type TSuccess_current = {
  current: string;
};

type TSuccess_fiveDays = {
  fiveDays: any[];
};

export const actions = createAsyncAction(pending, success, fail)<
  undefined,
  TSuccess_cityLists | TSuccess_current | TSuccess_fiveDays,
  undefined
>();

// saga 함수
export const addListSaga = createAction(`${prefix}ADD_LIST_SAGA`)<string[]>();

function* addList({ payload }: ReturnType<typeof addListSaga>) {
  const cityLists = yield select(state => state.weathers.cityLists);

  try {
    if (cityLists.length === payload.length) return;
    yield put(actions.request());
    yield put(
      actions.success({
        cityLists: payload,
      }),
    );
  } catch {
    yield put(actions.failure());
  }
}

export const addCurrentCitySaga = createAction(
  `${prefix}ADD_CURRENT_CITY_SAGA`,
)<string>();

function* addCurrentCity({ payload }: ReturnType<typeof addCurrentCitySaga>) {
  try {
    yield put(actions.request());
    yield put(
      actions.success({
        current: payload.toUpperCase(),
      }),
    );
  } catch {
    yield put(actions.failure());
  }
}

export const addFiveDaysWeatherSaga = createAction(
  `${prefix}ADD_FIVEDAYS_WEATHER_SAGA`,
)<string>();

function* addFiveDaysWeather({
  payload,
}: ReturnType<typeof addFiveDaysWeatherSaga>) {
  const fiveDays = yield select(state => state.weathers.fiveDays);
  try {
    yield put(actions.request());
    const { data } = yield call(WeatherServices.getFiveDayWeather, payload);
    yield put(
      actions.success({
        fiveDays: [...fiveDays, data],
      }),
    );
  } catch {
    console.log(Error);
  }
}

export function* weathersSaga() {
  yield takeLatest(addListSaga, addList);
  yield takeLatest(addCurrentCitySaga, addCurrentCity);
  yield takeLatest(addFiveDaysWeatherSaga, addFiveDaysWeather);
}

type TInitialState = {
  loading: boolean;
  error: null | {};
  current: string;
  cityLists: string[];
  fiveDays: [];
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  current: '',
  cityLists: [],
  fiveDays: [],
};

const weathers = createReducer<TInitialState>(initialState, {
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

export default weathers;
