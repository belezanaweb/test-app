import React from 'react'

import ModalSendsEmail from './ModalSendsEmail'
import { renderWithTheme } from './../../../utils/helper/renderWithTheme'

const obj = {
  modal: true,
  setModal: jest.fn()
}

describe('<BackgroundDegrade />', () => {
  test('renders ModalSendsEmail correctly', () => {
    const tree = renderWithTheme(<ModalSendsEmail {...obj} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
