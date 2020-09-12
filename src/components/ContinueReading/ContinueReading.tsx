import React, { useState } from 'react'
import Touchable from 'react-native-touchable-safe'

import * as S from './styles'
import toExtractOnlyTextContent from '../../utils/stringUtils'
import BackgroundDegrade from './../BackgroundDegrade/index'

export type Props = {
  description: string,
  expanded?: boolean,
  rotate?: boolean
}

const ContinueReading = ({ description }: Props) => {
  const [expanded, setExpanded] = useState(false)

  const iconArrow = require('./../../assets/images/icon-arrow.png')

  const handleChange = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <S.Container expanded={expanded}>
        <S.Description>{toExtractOnlyTextContent(description)}</S.Description>
        {!expanded && <BackgroundDegrade />}
      </S.Container>
      <Touchable onPress={handleChange}>
        <S.TouchableContent>
          <S.TouchableTitle>{!expanded ? 'Continuar Lendo' : 'Mostrar Menos'}</S.TouchableTitle>
          <S.TouchableIcon rotate={expanded} source={iconArrow} />
        </S.TouchableContent>
      </Touchable>
    </>
  )
}

export default ContinueReading
