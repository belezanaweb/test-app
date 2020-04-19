import { Text } from 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import Card from './Card'

describe('Test Card', () => {
  it('renders correctly', () => {
    create(
      <Card>
        <Text>Test</Text>
      </Card>,
    )
  })
})
