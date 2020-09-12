import React from 'react'

import Image from './Image'
import { renderWithTheme } from './../../utils/helper/renderWithTheme'

describe('<Image />', () => {
  test('renders Image correctly', () => {
    const component = renderWithTheme(<Image />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
