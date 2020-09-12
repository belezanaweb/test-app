import React, { useState } from 'react'
import { Modal } from 'react-native'
import * as S from './../styles'
import { Button, Card, Text, Input } from '../..'
import { Props } from './../types'

const ModalSendsEmail = ({ modal, setModal }: Props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleClose = () => setModal(false)

  return (
    <Modal animationType="fade" onRequestClose={handleClose} transparent visible={modal}>
      <S.ContainerModal>
        <Card>
          <S.Content>
            <Text>Digite seu nome:</Text>
            <Input onChangeText={setName} value={name} />
            <Text>Digite seu e-mail:</Text>
            <Input onChangeText={setEmail} value={email} />
            <Button onPress={handleClose}>Enviar</Button>
            <Button onPress={handleClose} secondary>
              Voltar
            </Button>
          </S.Content>
        </Card>
      </S.ContainerModal>
    </Modal>
  )
}

export default ModalSendsEmail
