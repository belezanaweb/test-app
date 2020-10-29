import React from 'react'
import { theme } from '~/styles/theme'

import { BaseButton, BaseButtonText } from './styles'

interface ISecondaryButton {
  text?: string;
  onPress?: () => void;
}

const SecondaryButton = ({ text, onPress }: ISecondaryButton) => {
  return (
    <BaseButton background={theme.colors.white} borderColor={theme.colors.orange} onPress={onPress}>
      <BaseButtonText color={theme.colors.orange}>{text}</BaseButtonText>
    </BaseButton>
  )
}

export default SecondaryButton
