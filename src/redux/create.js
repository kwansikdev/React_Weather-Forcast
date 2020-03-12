import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './modules/reducer';
import rootSaga from './modules/saga';

const sagaMiddleware = createSagaMiddleware();

export default function create() {
  const store = createStore(
    reducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
