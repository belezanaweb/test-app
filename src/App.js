import React from 'react'

import Provider from './theme/Provider'
import List from './screens/List'

const App: () => React$Node = () => {
  return (
    <Provider>
      <List />
    </Provider>
  )
}

export default App
