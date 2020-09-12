import 'react-native'
import React from 'react'

import { renderWithTheme } from '../../utils/helper/renderWithTheme'
import List from './List'
import mockData from './../../../mocks/mock'

const obj = {
  products: {
    name: mockData.data.name,
    sku: mockData.data.sku,
    priceSpecification: mockData.data.priceSpecification,
    price: mockData.data.priceSpecification.price,
    maxPrice: mockData.data.priceSpecification.maxPrice,
    imageObjects: mockData.data.imageObjects
  },
  navigation: { navigate: jest.fn() }
}

describe('<List />', () => {
  test('renders List correctly', () => {
    const component = renderWithTheme(<List {...obj} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
