import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './Ducks';
import tron from '../Config/ReactotronConfig';

const middlewares = [];
const enhancers = [];

enhancers.push(applyMiddleware(...middlewares));

const createAppropriateStore = createStore;

const persistConfig = {
  key: 'test-beleza',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createAppropriateStore(
  persistedReducer,
  compose(...enhancers, tron.createEnhancer()),
);

const persistor = persistStore(store);

export { store, persistor };
