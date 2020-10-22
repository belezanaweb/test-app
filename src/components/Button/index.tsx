import React from 'react'
import * as S from './styles'
import { ActivityIndicator } from 'react-native'

interface ButtonInterface {
  testID: string
  children: string
  onPress: () => void
  isLoading: boolean
}

const Button = ({ testID, children, onPress,isLoading }: ButtonInterface) => {
  return (
      <S.Button onPress={onPress} testID={`button ${testID}`}>
      {isLoading ?
       <ActivityIndicator style={{ flex: 1 }} color="white" size="small" />
        :
         <S.Title testID={`title ${testID}`}>{children}</S.Title> }
      </S.Button>
  )
}


export default React.memo(Button)
