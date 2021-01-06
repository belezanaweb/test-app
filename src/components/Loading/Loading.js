import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components/native'
import { Container, Indicator } from './Loading.styles'

const Loading = () => {
  const theme = useContext(ThemeContext)
  return (
    <Container testID="LoadingComponent">
      <Indicator color={theme.colors.primary} size="large" />
    </Container>
  )
}

export default Loading
