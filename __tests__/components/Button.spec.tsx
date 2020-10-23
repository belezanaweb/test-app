import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'

import Button from '../../src/components/Button'
const title = 'Button'

describe('Button', () => {
  test('should be able to show a button with text "Button"', () => {
    const component = render(
      <Button onPress={() => {}} isLoading={false} testID={title}>
        {title}
      </Button>,
    )

    const titleButton = component.getByTestId(`title ${title}`)
    expect(titleButton.props.children).toBe(title)
  })
})

describe('Button - OnPress', () => {
  test('should be able to render a button with onPress action', () => {
    const onPress = jest.fn()
    const component = render(
      <Button isLoading={false} testID="teste" onPress={onPress}>
        Action Button
      </Button>,
    )
    fireEvent.press(component.getByTestId('button teste'))
    expect(onPress).toHaveBeenCalledTimes(1)
  })
})

describe('Button - Loading', () => {
  test('should be able to show loading', () => {
    const component = render(
      <Button isLoading={true} testID="loading" onPress={() => {}}>
        Button
      </Button>,
    )
    const LoadingButton = component.getByTestId('button loading')
    expect(LoadingButton.props.children[0].props.isLoading).toBe(true)
  })
})
