import React from 'react'
import { View } from 'react-native'
import styled, { css } from 'styled-components'

import COLORS from '../constants/COLORS'

const CardStyled = styled(View)`
  background-color: ${p => p.backgroundcolor || COLORS.WHITE};
  padding: 10px;
  border-radius: 10px;
  width: 100%;

  ${p =>
    p.flex1 &&
    css`
      flex: 1;
    `}

  ${p =>
    p.flex &&
    css`
      flex: ${p.flex} !important;
    `}
`

export default props => <CardStyled {...props}>{props.children}</CardStyled>
