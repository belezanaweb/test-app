import React from 'react'
import { theme } from '~/styles/theme'

import { BaseButton, BaseButtonText } from './styles'

interface ISecondaryButton {
  text?: string;
}

const SecondaryButton = ({ text }: ISecondaryButton) => {
  return (
    <BaseButton background={theme.colors.white} borderColor={theme.colors.orange}>
      <BaseButtonText color={theme.colors.orange}>{text}</BaseButtonText>
    </BaseButton>
  )
}

export default SecondaryButton
