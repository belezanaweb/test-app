import React from 'react'
import { Modal } from 'react-native'
import { Content, ContainerModal } from './../styles'
import { Button, Card, Text } from '../..'
import { Props } from './../types'

const ModalAddToCart = ({ modal, setModal }: Props) => {
  const handleClose = () => setModal(false)

  return (
    <Modal
      animationType="fade"
      onRequestClose={handleClose}
      testId={'testId'}
      transparent
      visible={modal}
    >
      <ContainerModal>
        <Card>
          <Content>
            <Text>Adicionar ao carrinho?</Text>
            <Button onPress={handleClose}>Sim</Button>
            <Button onPress={handleClose} secondary>
              Não
            </Button>
          </Content>
        </Card>
      </ContainerModal>
    </Modal>
  )
}

export default ModalAddToCart
