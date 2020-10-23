import React from 'react'
import * as S from './styles'

interface ButtonInterface {
  testID: string
  children: string
  onPress: () => void
  isLoading?: boolean
  outline?: boolean
  styleOptional?: any
}

const Button = ({
  testID,
  children,
  onPress,
  isLoading,
  styleOptional,
  outline = false,
}: ButtonInterface) => {
  return (
    <S.Button
      style={styleOptional}
      outline={outline}
      onPress={onPress}
      testID={`button ${testID}`}
    >
      {isLoading ? (
        <S.ContainerLoading isLoading={isLoading} />
      ) : (
        <S.Title outline={outline} testID={`title ${testID}`}>
          {children}
        </S.Title>
      )}
    </S.Button>
  )
}

export default React.memo(Button)
