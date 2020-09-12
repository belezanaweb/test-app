import 'react-native'
import React from 'react'

import { renderWithTheme } from '../../utils/helper/renderWithTheme'
import ItemDetails from './ItemDetails'
import mockData from './../../../mocks/mock'

describe('<ItemDetails />', () => {
  const obj = {
    item: mockData.data,
    modal: false,
    setModal: jest.fn()
  }

  it('renders ItemDetails correctly', () => {
    const component = renderWithTheme(<ItemDetails {...obj} />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('doesnt render modal ModalAddToCart if state is false', async () => {
    obj.modal = false
    const { queryByTestId } = renderWithTheme(<ItemDetails {...obj} />)
    const component = queryByTestId('ModalAddToCart')
    expect(component).toBeNull()
  })

  it('doesnt render modal ModalSendsEmail if state is false', async () => {
    obj.modal = false
    const { queryByTestId } = renderWithTheme(<ItemDetails {...obj} />)
    const component = queryByTestId('ModalSendsEmail')
    expect(component).toBeNull()
  })

  it('doesnt render discount', async () => {
    obj.item.priceSpecification.price = 10
    obj.item.priceSpecification.maxPrice = 1000
    const { queryByTestId } = renderWithTheme(<ItemDetails {...obj} />)
    const component = queryByTestId('newprice')
    expect(component).toBeNull()
  })

  it('doesnt render modal if state is false', async () => {
    obj.modal = true
    const { queryByTestId } = renderWithTheme(<ItemDetails {...obj} />)
    const component = queryByTestId('teste')
    expect(component).toBeNull()
  })
})
