import 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import Button from './Button'

describe('Test Button', () => {
  it('renders correctly', () => {
    create(<Button>Test</Button>)
  })
})
