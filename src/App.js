import React from 'react'

import Provider from './theme/Provider'
import Home from './screens/Home'

const App: () => React$Node = () => {
  return (
    <Provider>
      <Home />
    </Provider>
  )
}

export default App
