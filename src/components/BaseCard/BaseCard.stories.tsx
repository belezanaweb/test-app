import { storiesOf } from '@storybook/react-native'
import React from 'react'
import BaseCard from '.'

import SecondaryButton from '../Buttons/SecondaryButton'

storiesOf('ui/BaseCard', module).add('BaseCard with button', () => (
  <BaseCard>
    <SecondaryButton text="CARD" />
  </BaseCard>
))
