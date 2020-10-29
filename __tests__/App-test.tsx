import React from 'react'
import App from '../src'

import { render, act } from '@testing-library/react-native'

it('renders app correctly', async () => {
  const app = render(<App />)
  await act(async () => {
    expect(app).toBeTruthy()
  })
})
