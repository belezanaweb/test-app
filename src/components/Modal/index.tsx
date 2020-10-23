import React, { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'
import * as S from './styles'

const Modal = ({ children }: any) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false)

  useEffect(() => {
    Keyboard.addListener('keyboardWillShow', _keyboardWillShow)
    Keyboard.addListener('keyboardWillHide', _keyboardWillHide)

    return () => {
      Keyboard.removeListener('keyboardWillShow', _keyboardWillShow)
      Keyboard.removeListener('keyboardWillHide', _keyboardWillHide)
    }
  }, [])

  const _keyboardWillShow = () => {
    setIsKeyboardOpen(true)
  }

  const _keyboardWillHide = () => {
    setIsKeyboardOpen(false)
  }

  return (
    <S.Container isKeyboardOpen={isKeyboardOpen}>
      <S.Box>{children}</S.Box>
    </S.Container>
  )
}

export default React.memo(Modal)
