import {
  createAction,
  createAsyncAction,
  ActionType,
  createReducer,
} from 'typesafe-actions';
import { put, takeLatest } from 'redux-saga/effects';

const prefix: string = `common/`;

const pending = `${prefix}PENDING`;
const success = `${prefix}SUCCESS`;
const fail = `${prefix}FAIL`;

type TSuccess = {
  status: boolean;
};

const actions = createAsyncAction(pending, success, fail)<
  undefined,
  TSuccess,
  Error
>();

type CommonAction = ActionType<typeof actions>;

// saga function
export const addThemeStatusSaga = createAction(
  `${prefix}ADD_THEME_STATUS_SAGA`,
)<boolean>();

function* addThemeStatus({ payload }: ReturnType<typeof addThemeStatusSaga>) {
  try {
    yield put(actions.request());
    yield put(
      actions.success({
        status: payload,
      }),
    );
  } catch (Error) {
    yield put(actions.failure(Error));
  }
}

export function* commonSaga() {
  yield takeLatest(addThemeStatusSaga, addThemeStatus);
}
// initialState
type TInitialState = {
  loading: boolean;
  error: null | {};
  status: boolean;
};

const initialState: TInitialState = {
  loading: false,
  error: null,
  status: false,
};

// Reducer
const common = createReducer<TInitialState>(initialState, {
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

export default common;
