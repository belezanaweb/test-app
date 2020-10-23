import React from 'react'

import * as S from './styles'

interface InputProps {
  name: string
}

const Input = ({ name, ...rest }: InputProps) => {
  return (
    <>
      <S.Label>{name}</S.Label>
      <S.Input {...rest} />
    </>
  )
}

export default React.memo(Input)
