import React from 'react'
import { View, Text, Image } from 'react-native'
import Button from '../Button'
import * as S from './styles'

interface Product {
  image: {
    imageUrl: string
  }
  sku: string
  name: string
}

interface CardInterface {
  data: Product
}

const Card = ({ data }: CardInterface) => {
  return (
    <S.Container>
      <S.ContainerImage>
        <Image
          source={{ uri: data.image?.imageUrl }}
          style={{ width: 108, height: 108, marginBottom: 16 }}
        />
        <S.CodeProduct>{`cod: ${data.sku}`}</S.CodeProduct>
      </S.ContainerImage>
      <S.ContainerInformations>
        <S.Description>{data.name}</S.Description>
        <S.Price>10000</S.Price>
        <Button>Ver detalhes</Button>
      </S.ContainerInformations>
    </S.Container>
  )
}

export default React.memo(Card)
