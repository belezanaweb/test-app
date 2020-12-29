import React from 'react'
import styled from 'styled-components/native'

const FullWidthButton = props => (
  <ButtonContainer {...props}>
    <ButtonLabel>{props.children}</ButtonLabel>
  </ButtonContainer>
)

const ButtonContainer = styled.Pressable`
  margin-top: 10px;
  justify-content: center;
  height: 36px;
  background: #ffffff;
  border: 2px solid #ff6c00;
  border-radius: 4px;
`

const ButtonLabel = styled.Text`
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ff6c00;
`

export default FullWidthButton
