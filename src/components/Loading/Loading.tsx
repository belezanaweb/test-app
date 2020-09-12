import React from 'react'
import { ActivityIndicator } from 'react-native'

import * as S from './styles'
import { theme } from '../../styles/theme'

type Props = {
  text?: string
}

const Loading = ({ text = 'Carregando...' }: Props) => {
  return (
    <S.Container testID="loading">
      <ActivityIndicator color={theme.colors.primary} size="large" />
      <S.Name>{text}</S.Name>
    </S.Container>
  )
}

export default Loading
