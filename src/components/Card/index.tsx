import React from 'react'
import { View, Text } from 'react-native'
import Button from '../Button'
import * as S from './styles'

const Card: React.FC = () => {
  return (
    <S.Container>
      <S.ContainerImage>
        <View style={{ width: 108, height: 108, marginBottom: 16, backgroundColor: 'red' }} />
        <S.CodeProduct>codigo</S.CodeProduct>
      </S.ContainerImage>
      <S.ContainerInformations>
        <S.Description>
          uma descricaao dalsl dlaldsld lauma descric aao dalsl dlaldsld l auma desc ricaao dalsl
          dlaldsld lauma descricaao dalsl dlaldsld lauma descri caa o dalsl dlaldsld la
        </S.Description>
        <S.Price>10000</S.Price>
        <Button>Ver detalhes</Button>
      </S.ContainerInformations>
    </S.Container>
  )
}

export default React.memo(Card)
