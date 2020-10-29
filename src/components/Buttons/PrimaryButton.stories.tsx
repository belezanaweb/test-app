import { storiesOf } from '@storybook/react-native'
import React from 'react'
import PrimaryButton from './PrimaryButton'

storiesOf('ui/Buttons/PrimaryButton', module).add('PrimaryButton', () => (
  <PrimaryButton text="Primary" />
))
