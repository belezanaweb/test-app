import React from 'react'
import { Container, Indicator } from './Loading.styles'

const Loading = () => (
  <Container testID="LoadingComponent">
    <Indicator color="#ff6c00" size="large" />
  </Container>
)

export default Loading
