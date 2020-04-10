import React from 'react'

import { ContainerButton, Text } from './styles'

const Button = props => {
  return (
    <ContainerButton {...props} >
      <Text {...props}>{props.children}</Text>
    </ContainerButton>
  )
}

export default Button
