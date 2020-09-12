import React from 'react'

import ContinueReading from './ContinueReading'
import { renderWithTheme } from './../../utils/helper/renderWithTheme'

const obj = {
  description: 'continue...'
}

describe('<ContinueReading />', () => {
  test('renders ContinueReading correctly', () => {
    const component = renderWithTheme(<ContinueReading {...obj} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
