import styled from 'theme'
import * as React from 'react'

interface IProps {
}

export const Container: JSX.Element = styled.ScrollView<IProps>`
  flex: 1;
  background-color: ${props => props.theme.background};
`
