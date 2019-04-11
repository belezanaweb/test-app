import styled from 'theme'
import * as React from 'react'

interface IProps {
  primary?: boolean
  gray?: boolean
  size?: number
}

export const Text: JSX.Elment = styled.Text<IProps>`
  font-style: normal;
  font-weight: normal;
  font-size: ${props => props.size ? props.size : 12}px;
`
