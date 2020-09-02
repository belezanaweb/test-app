import Routes from './config/routes.js';

import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import store, {configureStore} from './redux/store';

import {ActivityIndicator} from 'react-native';

const {persistor} = configureStore();

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
