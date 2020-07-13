import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components'

import COLORS from '../constants/COLORS'

const TouchableOpacityStyled = styled(TouchableOpacity)`
  min-height: 35px;
  border: 2px solid ${p => p.bordercolor || p.backgroundcolor || COLORS.ORANGE};
  border-radius: 10px;
  padding: 10px;

  ${p =>
    p.primary &&
    css`
      background-color: ${p => p.backgroundcolor || COLORS.ORANGE};
    `}

  ${p =>
    p.rounded &&
    css`
      background-color: ${COLORS.WHITE};
    `}
`
const TextStyled = styled(Text)`
  font-size: 15px;
  color: white;
  text-align: center;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: auto;
  
    ${p =>
      p.primary &&
      css`
        color: ${p.color || COLORS.WHITE};
      `}
    ${p =>
      p.rounded &&
      css`
        color: ${p.backgroundcolor || COLORS.ORANGE};
        border-color: ${p => p.backgroundcolor || COLORS.ORANGE};
      `}
    ${p =>
      p.uppercase &&
      css`
        text-transform: uppercase;
      `};
`

export default props => (
  <TouchableOpacityStyled onPress={props.onPress} {...props} {...props.button}>
    <TextStyled {...props} {...props.text}>
      {props.title}
    </TextStyled>
  </TouchableOpacityStyled>
)
