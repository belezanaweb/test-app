import React from 'react'
import { Text } from 'react-native'
import styled, { css } from 'styled-components'

import COLORS from '../constants/COLORS'

const TextStyled = styled(Text)`
  font-size: ${p => p.fontsize || '12px'};
  color: ${p => p.color || COLORS.BLACK};
  text-align: center;
  justify-content:center;
  

  ${p =>
    p.title &&
    css`
      min-height: 40px;
      font-size: 15px;
      justify-content: center;
      padding-top: 5px;
    `}

    ${p =>
      p.textleft &&
      css`
        text-align: left;
      `}

    ${p =>
      p.textright &&
      css`
        text-align: right;
      `}

  ${p =>
    p.bold &&
    css`
      font-weight: bold;
    `}

  ${p =>
    p.uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${p =>
    p.overline &&
    css`
      text-decoration: overline;
    `}

  ${p =>
    p.linethrough &&
    css`
      text-decoration: line-through;
    `}
`

export default props => <TextStyled {...props}>{props.children}</TextStyled>
