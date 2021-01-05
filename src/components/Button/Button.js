import React from 'react'
import { ButtonContainer, ButtonLabel } from './Button.styles'

const Button = props => (
  <ButtonContainer {...props}>
    <ButtonLabel primary={props.primary}>{props.children}</ButtonLabel>
  </ButtonContainer>
)

export default Button
