import { storiesOf } from '@storybook/react-native'
import React from 'react'
import SecondaryButton from './SecondaryButton'

storiesOf('ui/Buttons/SecondaryButton', module).add('SecondaryButton', () => (
  <SecondaryButton text="Secondary" />
))
