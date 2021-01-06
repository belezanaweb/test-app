import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import { ThemeContext } from 'styled-components/native'
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
  const theme = useContext(ThemeContext)
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
          <Icon color={theme.colors.accordionButton} name="chevron-up-outline" size={15} />
        </Button>
      ) : (
        <Button onPress={() => setOpen(true)}>
          <ButtonLabel>Continue Lendo</ButtonLabel>
          <Icon color={theme.colors.accordionButton} name="chevron-down-outline" size={15} />
        </Button>
      )}
    </>
  )
}

Accordion.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string.isRequired
}
export default Accordion
