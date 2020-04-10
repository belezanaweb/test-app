import 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import Text from './Text'

describe('Test Text', () => {
  it('basic renders correctly', () => {
    create(<Text>Test</Text>)
  })
  it('render Text type="h1"', () => {
    create(<Text type="h1">Test</Text>)
  })

  it('render Text type="h2"', () => {
    create(<Text type="h2">Test</Text>)
  })
  it('render Text type="h3"', () => {
    create(<Text type="h3">Test</Text>)
  })

  it('render Text type="h4"', () => {
    create(<Text type="h4">Test</Text>)
  })
  it('render Text type="h5"', () => {
    create(<Text type="h5">Test</Text>)
  })
})
