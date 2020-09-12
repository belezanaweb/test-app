import 'react-native'
import React from 'react'

import { renderWithTheme } from '../../utils/helper/renderWithTheme'
import Input from './Input'

const obj = {
  value: 'test'
}

describe('<Input />', () => {
  test('renders Input correctly', () => {
    const component = renderWithTheme(<Input {...obj} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
