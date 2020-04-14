import {
  createReducer,
  createAction,
  ActionType,
  createAsyncAction,
} from 'typesafe-actions';
import { put, call, select, takeLatest, takeEvery } from 'redux-saga/effects';

const prefix: string = 'weathers/';

const pending = `${prefix}PENDING`;
const success = `${prefix}SUCCESS`;
const fail = `${prefix}FAIL`;

type TSuccess_cityLists = {
  cityLists: string[];
};

type TSuccess_success = {
  current: string;
};

export const actions = createAsyncAction(pending, success, fail)<
  undefined,
  TSuccess_cityLists | TSuccess_success,
  undefined
>();

// saga 함수
export const addListSaga = createAction(`${prefix}ADD_LIST_SAGA`)<string[]>();

function* addList({ payload }: ReturnType<typeof addListSaga>) {
  const cityLists = yield select(state => state.weathers.cityLists);

  try {
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

export function* weathersSaga() {
  yield takeLatest(addListSaga, addList);
  yield takeLatest(addCurrentCitySaga, addCurrentCity);
}

type TInitialState = {
  loading: boolean;
  error: null | {};
  current: string;
  cityLists: string[];
  fiveDays: {};
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  current: '',
  cityLists: [],
  fiveDays: {},
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
