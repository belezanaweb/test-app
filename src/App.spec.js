import 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import App from './App'

describe('Test App', () => {
  it('renders correctly', () => {
    create(<App />)
  })
})
