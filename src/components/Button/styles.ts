import styled, { css } from 'styled-components/native'

import { ButtonProps } from './Button'

type Props = Pick<ButtonProps, 'secondary'>

export const Container =
  styled.TouchableOpacity <
  Props >
  `
${({ theme, secondary }) => css`
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  background-color: ${!secondary ? `${theme.colors.primary}` : 'white'};
  border: ${`2px solid ${theme.colors.primary}`};
  margin-bottom: 4px;
`}
`

export const Text =
  styled.Text <
  Props >
  `
  ${({ theme, secondary }) => css`
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${secondary ? `${theme.colors.primary}` : 'white'};
  `}
  `
