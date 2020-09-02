import {createStore, compose, applyMiddleware} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/es/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducers from '../reducers';
import sagas from '../sagas';

const config = {
  key: 'root',
  storage,
  blacklist: [],
  debug: true,
};

const sagaMonitor = null;

const middleware = [];
const sagaMiddleware = createSagaMiddleware({sagaMonitor});
middleware.push(sagaMiddleware);

const composer = compose(applyMiddleware(...middleware));

const reducers = persistCombineReducers(config, rootReducers);
const persistConfig = {composer};
const store = createStore(reducers, composer);

const persistor = persistStore(store, persistConfig);
export const configureStore = () => {
  return {persistor, store};
};

sagaMiddleware.run(sagas);

export default store;
