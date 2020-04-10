import 'react-native'
import React from 'react'
import { create, act } from 'react-test-renderer'

import Button from './Button'

describe('Test Button', () => {
  it('renders correctly', () => {
    create(<Button>Test</Button>)
  })
})
