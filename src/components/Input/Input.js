import React from 'react'

import { TextInputStyled } from './styles'

export default function Input(props) {
  return <TextInputStyled onChangeText={props.onChangeText} value={props.value} />
}
