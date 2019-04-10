import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { themeColors, ThemeProvider } from 'theme'
import { Provider } from 'react-redux'
import { store, persistor } from 'store'

import Routes from 'store/navigator'

interface IProps {}

const App: React.FunctionComponent<IProps> = (): JSX.Element => (
  <ThemeProvider theme={themeColors}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </ThemeProvider>
)

export default App
