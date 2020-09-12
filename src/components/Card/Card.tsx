import React from 'react'

import { WithChildren } from './../../utils/helper/WithChildren'
import * as S from './styles'

const Card = ({ children }: WithChildren) => {
  return <S.Container testID="card">{children}</S.Container>
}

export default Card
