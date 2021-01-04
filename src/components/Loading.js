import React from 'react'
import styled from 'styled-components/native'

const Loading = () => (
  <Container>
    <Indicator color="#ff6c00" size="large" />
  </Container>
)

const Indicator = styled.ActivityIndicator``

const Container = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
`

export default Loading
