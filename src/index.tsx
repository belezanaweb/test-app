import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import configureStore from 'store'
import Routes from 'store/navigator'

const { store, persistor } = configureStore(true, true)

interface IProps {
}

const App: React.FunctionComponent<IProps> = (): React.ReactElement => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routes/>
    </PersistGate>
  </Provider>
)

export default App
