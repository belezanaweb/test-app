import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '~/styles/theme'
import { CenteredContainer } from '~/styles/baseStyles'

const themeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <CenteredContainer>{storyFn()}</CenteredContainer>
  </ThemeProvider>
)

export default themeDecorator
