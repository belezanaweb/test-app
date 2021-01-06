import React from 'react'
import PropTypes from 'prop-types'

import { ButtonContainer, ButtonLabel } from './Button.styles'

const Button = props => (
  <ButtonContainer {...props}>
    <ButtonLabel primary={props.primary}>{props.children}</ButtonLabel>
  </ButtonContainer>
)

Button.propTypes = {
  primary: PropTypes.bool,
  children: PropTypes.string.isRequired
}

export default Button
