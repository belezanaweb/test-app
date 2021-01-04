import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/dist/Ionicons'
import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

const Accordion = ({ title, body }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Body numberOfLines={open ? null : 4}>{body}</Body>
        {!open && (
          <WhiteLinearGradient
            colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
            end={{ x: 0.0, y: 0.75 }}
            locations={[0, 1]}
            start={{ x: 0.0, y: 1.0 }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
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

const WhiteLinearGradient = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const Button = styled.Pressable`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ButtonLabel = styled.Text`
  font-family: Roboto;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #a43287;
`

const Divider = styled.View`
  margin: 14px 0 4px 0;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
`

const Container = styled.View``

const Title = styled.Text`
  font-family: Roboto;
  margin: 5px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.307692px;
  color: #212121;
`

const Body = styled.Text`
  font-family: Roboto;
  font-size: 12px;
  line-height: 19px;
  color: #777777;
`

export default Accordion
