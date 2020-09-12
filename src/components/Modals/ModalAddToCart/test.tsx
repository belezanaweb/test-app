import React from 'react'

import ModalAddToCart from './ModalAddToCart'
import { renderWithTheme } from './../../../utils/helper/renderWithTheme'

describe('ModalAddToCart', () => {
  const obj = {
    modal: true,
    setModal: jest.fn()
  }
  it('renders ModalAddToCart correctly', () => {
    const component = renderWithTheme(<ModalAddToCart {...obj} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
