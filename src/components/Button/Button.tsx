import React from 'react'

import * as S from './styles'

export type ButtonProps = {
  children?: React.ReactNode,
  secondary?: boolean,
  onPress?: () => void
}
const Button = ({ ...props }: ButtonProps) => {
  return (
    <S.Container {...props} testID="button">
      <S.Text {...props}>{props.children}</S.Text>
    </S.Container>
  )
}

export default Button
