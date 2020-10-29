import React from 'react'

import { render, act, fireEvent } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import { expect, it } from '@jest/globals'
import { theme } from '~/styles/theme'
import PrimaryButton from '~/components/Buttons/PrimaryButton'

const MockedComponent = ({ text }) => (
  <ThemeProvider theme={theme}>
    <PrimaryButton text={text} />
  </ThemeProvider>
)

it('verify props', async () => {
  const { findByTestId, debug, update } = render(<MockedComponent text="teste" />)
  const primaryButtonText = await findByTestId('text')
  expect(primaryButtonText.props.children).toEqual('teste')
})
