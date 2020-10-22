import React from 'react'
import * as S from './styles'

interface ButtonInterface {
  testID: string
  children: string
}

const Button = ({ testID, children }: ButtonInterface) => {
  return (
      <S.Button testID={`button ${testID}`}>
        <S.Title testID={`title ${testID}`}>{children}</S.Title>
      </S.Button>
  )
}

export default React.memo(Button)
