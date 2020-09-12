import React from 'react'

import Card from './Card'
import { renderWithTheme } from './../../utils/helper/renderWithTheme'

describe('<Card />', () => {
  test('renders Card correctly', () => {
    const component = renderWithTheme(<Card />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
