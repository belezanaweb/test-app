import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import {
  Container,
  Title,
  Body,
  AbsoluteLinearGradient,
  Divider,
  Button,
  ButtonLabel
} from './Accordion.styles'

const Accordion = ({ title, body }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Body numberOfLines={open ? null : 4}>{body}</Body>
        {!open && (
          <AbsoluteLinearGradient
            colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
            end={{ x: 0.0, y: 0.75 }}
            locations={[0, 1]}
            start={{ x: 0.0, y: 1.0 }}
          />
        )}
      </Container>
      <Divider />
      {open ? (
        <Button onPress={() => setOpen(false)}>
          <ButtonLabel>Minimizar</ButtonLabel>
          <Icon color={'#a43287'} name="chevron-up-outline" size={15} />
        </Button>
      ) : (
        <Button onPress={() => setOpen(true)}>
          <ButtonLabel>Continue Lendo</ButtonLabel>
          <Icon color={'#a43287'} name="chevron-down-outline" size={15} />
        </Button>
      )}
    </>
  )
}

export default Accordion
