import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { themeColors, ThemeProvider } from 'theme'
import { Provider } from 'react-redux'
import configureStore from 'store'

const { store, persistor } = configureStore(true, true)

import Routes from 'store/navigator'

interface IProps {}

const App: React.FunctionComponent<IProps> = (): React.ReactElement => (
  <ThemeProvider theme={themeColors}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </ThemeProvider>
)

export default App