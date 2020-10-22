import React from 'react'
import { render } from '@testing-library/react-native'

import Button from '../../src/components/Button'
const title = 'Button'

describe('Button', () => {
  test('should be able to show a button with text "Button"', () => {
    const component = render(<Button testID={title}>{title}</Button>)

    const titleButton = component.getByTestId(`title ${title}`)
    expect(titleButton.props.children).toBe(title)
  })
})
