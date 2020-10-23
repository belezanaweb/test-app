import React, { useState } from 'react'

import Shape from '../../../src/assets/img/shape.svg'
import * as S from './styles'

interface AccordionProps {
  description: string | undefined
  textOpenReadMore?: string
  textCloseRedMore?: string
}

const Accordion = ({
  description,
  textOpenReadMore = 'Continuar lendo',
  textCloseRedMore = 'Fechar',
}: AccordionProps) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <S.Description numberOfLines={visible ? 0 : 4}>
        {description
          ? description
          : 'O perfume é tão bom que levaram até a descrição'}
      </S.Description>
      <S.Line />
      <S.ContainerButton onPress={() => setVisible(state => !state)}>
        <S.ReadMore>{visible ? textCloseRedMore : textOpenReadMore}</S.ReadMore>
        <Shape />
      </S.ContainerButton>
    </>
  )
}

export default React.memo(Accordion)
