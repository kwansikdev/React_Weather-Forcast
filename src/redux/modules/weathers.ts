import {
  createReducer,
  createAction,
  createAsyncAction,
} from 'typesafe-actions';
import { put, call, select, takeLatest } from 'redux-saga/effects';
import WeatherServices from '../../services/WeatherServices';
import {
  FiveDaysWeatherType,
  List,
  City,
} from '../../Type/fiveDaysWeatherType';
import { currentWeahterType } from '../../Type/currentWeahterType';

const prefix: string = 'weathers/';

const pending = `${prefix}PENDING`;
const success = `${prefix}SUCCESS`;
const fail = `${prefix}FAIL`;

type TSuccess = {
  cityLists?: string[];
  current?: string;
  city_weathers?: any[];
  currentFiveDaysWeather?: {};
  currentWeather?: {};
  fiveDays?: any[];
};

export const actions = createAsyncAction(pending, success, fail)<
  undefined,
  TSuccess,
  undefined
>();

// saga 함수

// 메인홈페이지에서 나라를 선택시 그 나라에 대한 날씨 데이터를 따로 저장하는 saga람수
export const addListSaga = createAction(`${prefix}ADD_LIST_SAGA`)<string>();

function* addList({ payload }: ReturnType<typeof addListSaga>) {
  const cityLists = yield select(state => state.weathers.cityLists);
  const city_weathers = yield select(state => state.weathers.city_weathers);

  try {
    // if (cityLists.length === payload.length) return;
    yield put(actions.request());
    yield put(
      actions.success({
        cityLists: [...cityLists, payload.toUpperCase()],
      }),
    );
    const { data } = yield call(WeatherServices.getCurrentWeather, payload);
    yield put(
      actions.success({
        city_weathers: [...city_weathers, data],
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
  const fiveDays = yield select(state => state.weathers.fiveDays);
  const city_weathers = yield select(state => state.weathers.city_weathers);

  try {
    yield put(actions.request());
    yield put(
      actions.success({
        current: payload.replace(/(\s*)/g, '').toUpperCase(),
      }),
    );

    yield put(
      actions.success({
        currentWeather: city_weathers.filter(
          (country: any) =>
            country.name.replace(/(\s*)/g, '').toLowerCase() ===
            payload.replace(/(\s*)/g, '').toLowerCase(),
        )[0],
      }),
    );

    yield put(
      actions.success({
        currentFiveDaysWeather: fiveDays.filter(
          (weather: any) =>
            weather.city.name.replace(/(\s*)/g, '').toLowerCase() ===
            payload.replace(/(\s*)/g, '').toLowerCase(),
        )[0],
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

  function getWeekendWeather(data: FiveDaysWeatherType) {
    const today = new Date();
    const todayToString = today.toUTCString();

    const todayMilli = Date.parse(todayToString);

    const arrTime = [
      today.getFullYear(),
      '0' + (today.getMonth() + 1),
      today.getDate(),
    ];

    const todayDate = arrTime.reduce((pre, cur) => pre + '-' + cur);

    // 현재 날짜의 3시간 간격의 데이터 5개
    const result = data.list.filter(
      list => list.dt_txt.slice(0, 10) === todayDate,
    );

    // 가져온 데이터의 현재시간을 밀리초로 변경후 현재시간의 밀리초를 뺀 결과의 배열
    const resultMili = result.map(list =>
      Math.abs(Date.parse(list.dt_txt) - todayMilli),
    );

    // 최소값
    const minResultMili = resultMili.sort((a, b) => a - b)[0];
    const minusMinResultMili = resultMili.sort((a, b) => a - b)[0] * -1;

    // 최소값의 밀리초에 현재 밀리초를 더한뒤 현재시간을 가져옴
    // 현재 시간에서 제일 가까운 시간대의 데이터의 시간
    const lastTime = new Date(minResultMili + todayMilli);
    const minusLastTime = new Date(minusMinResultMili + todayMilli);

    // 위에서 가져오 데이터의 시간과 같은 5일치의 데이터에서 맞는 데이터 필터
    const weekend = data.list.filter(list =>
      list.dt_txt.slice(11) === lastTime.toTimeString().slice(0, 8)
        ? list.dt_txt.slice(11) === lastTime.toTimeString().slice(0, 8)
        : list.dt_txt.slice(11) === minusLastTime.toTimeString().slice(0, 8),
    );

    const city = data.city;

    return { city, weekend };
  }

  try {
    yield put(actions.request());

    const { data } = yield call(WeatherServices.getFiveDayWeather, payload);
    const weekend = getWeekendWeather(data);

    yield put(
      actions.success({
        fiveDays: [...fiveDays, weekend],
      }),
    );
  } catch {
    console.log(Error);
  }
}

export const removeCitySaga = createAction(`${prefix}REMOVE_CITY_SAGA`)<
  string
>();

function* removeCity({ payload }: ReturnType<typeof removeCitySaga>) {
  const cityLists = yield select(state => state.weathers.cityLists);
  const fiveDays = yield select(state => state.weathers.fiveDays);
  const city_weathers = yield select(state => state.weathers.city_weathers);

  try {
    yield put(actions.request());
    yield put(
      actions.success({
        cityLists: [
          ...cityLists.filter(
            (city: string) =>
              city.replace(/(\s*)/g, '').toLowerCase() !==
              payload.replace(/(\s*)/g, '').toLowerCase(),
          ),
        ],
        fiveDays: [
          ...fiveDays.filter(
            (city: { city: City; weekend: List[] }) =>
              city.city.name.replace(/(\s*)/g, '').toLowerCase() !==
              payload.replace(/(\s*)/g, '').toLowerCase(),
          ),
        ],
        city_weathers: [
          ...city_weathers.filter(
            (city: currentWeahterType) =>
              city.name.replace(/(\s*)/g, '').toLowerCase() !==
              payload.replace(/(\s*)/g, '').toLowerCase(),
          ),
        ],
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
  yield takeLatest(removeCitySaga, removeCity);
}

type TInitialState = {
  loading: boolean;
  error: null | {};
  cityLists: string[];
  city_weathers: [];
  fiveDays: [];
  current: string;
  currentFiveDaysWeather?: any;
  currentWeather?: any;
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  cityLists: [],
  city_weathers: [],
  fiveDays: [],
  current: '',
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
