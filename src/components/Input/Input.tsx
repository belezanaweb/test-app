import React from 'react'

import * as S from './styles'

type Props = {
  onChangeText?: (text: string) => void,
  value: string
}

export default function Input({ onChangeText, value }: Props) {
  return <S.Input onChangeText={onChangeText} testID="input" value={value} />
}
