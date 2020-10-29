import React from 'react'
import { theme } from '~/styles/theme'

import { BaseButton, BaseButtonText } from './styles'

interface IPrimaryButton {
  text?: string;
}

const PrimaryButton = ({ text }: IPrimaryButton) => {
  return (
    <BaseButton background={theme.colors.orange} borderColor={theme.colors.orange}>
      <BaseButtonText testID="text" color={theme.colors.white}>
        {text}
      </BaseButtonText>
    </BaseButton>
  )
}

export default PrimaryButton
