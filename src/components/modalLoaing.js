import React, { useState } from 'react'
import { Button, Text, View, TextInput } from 'react-native'
import Modal from 'react-native-modal'

const ModalTester = () => {
  const [isModalVisible, setModalVisible] = useState(true)

  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }

  return (
    <Modal isVisible={isModalVisible}>
      <Text>Loading !!!</Text>
      <Button title="Hide modal" onPress={toggleModal} />
    </Modal>
  )
}

export default ModalTester
