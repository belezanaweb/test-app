import React from 'react'
import styled from 'styled-components/native'

const Button = props => (
  <ButtonContainer {...props}>
    <ButtonLabel primary={props.primary}>{props.children}</ButtonLabel>
  </ButtonContainer>
)

const ButtonContainer = styled.Pressable`
  justify-content: center;
  height: 36px;
  background: ${props => (props.primary ? '#ff6c00' : '#ffffff')};
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
  color: ${props => (props.primary ? '#ffffff' : '#ff6c00')};
`

export default Button
