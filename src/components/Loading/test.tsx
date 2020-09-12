import React from 'react'

import { renderWithTheme } from './../../utils/helper/renderWithTheme'
import Loading from './Loading'

const obj = {
  text: 'carregando...'
}

describe('<Loading />', () => {
  test('renders Loading correctly', () => {
    const component = renderWithTheme(<Loading {...obj} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
