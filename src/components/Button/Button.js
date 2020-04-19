import React from 'react'

import { ContainerButton, TextButton } from './styles'

const Button = props => {
  return (
    <ContainerButton {...props}>
      <TextButton {...props}>{props.children}</TextButton>
    </ContainerButton>
  )
}

export default Button
