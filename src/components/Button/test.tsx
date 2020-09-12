import React from 'react'

import Button from './Button'
import { renderWithTheme } from './../../utils/helper/renderWithTheme'

describe('<Button />', () => {
  test('renders Button correctly', () => {
    const component = renderWithTheme(<Button />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
