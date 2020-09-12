import React from 'react'

import Text from './Text'
import { renderWithTheme } from './../../utils/helper/renderWithTheme'

describe('<Text />', () => {
  test('renders Text correctly', () => {
    const component = renderWithTheme(<Text />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
