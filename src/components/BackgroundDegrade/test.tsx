import React from 'react'

import BackgroundDegrade from './BackgroundDegrade'
import { renderWithTheme } from './../../utils/helper/renderWithTheme'

describe('<BackgroundDegrade />', () => {
  test('renders BackgroundDegrade correctly', () => {
    const component = renderWithTheme(<BackgroundDegrade />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
