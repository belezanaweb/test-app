import React from 'react'
import * as S from './styles'
import { ImageProps } from 'react-native'

export interface Props extends ImageProps {
  large?: boolean;
}

const Image = ({ ...props }: Props) => {
  return <S.Image {...props} testID="image" />
}

export default Image
