import styled, { css } from 'styled-components/native'

import { Props } from './Image'

type StyledProps = Props

export const Image =
  styled.Image <
  StyledProps >
  `
${({ large }) => css`
  width: ${large ? '163px' : '108px'};
  height: ${large ? '163px' : '108px'};
`}`
