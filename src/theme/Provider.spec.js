import { Text } from 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import Provider from './Provider'

describe('Test Provider', () => {
  it('renders correctly', () => {
    create(
      <Provider>
        <Text>Hi</Text>
      </Provider>,
    )
  })
})
