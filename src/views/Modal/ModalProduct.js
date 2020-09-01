/**
 * @Format
 */

import React, { Children } from 'react'
import PropTypes from 'prop-types'

// Components
import { View, Modal, TouchableOpacity, Text } from 'react-native'

import Styles from './ModalProduct.style'

const ModalProduct = ({ product, onOpenModal, openModal, children }) => {
  const onPressOpenModal = () => {
    onOpenModal(false)
  }
  return (
    <>
      <Modal transparent animationType="fade" visible={openModal} onRequestClose={onPressOpenModal}>
        <TouchableOpacity style={Styles.bodyPopup} activeOpacity={0.5} onPress={onPressOpenModal}>
          <View style={[Styles.wrapperPopup, { height: 200 }]}>
            <Text style={[Styles.header]}>Confirmar compra </Text>
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>{children}</View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  )
}

ModalProduct.propTypes = {
  product: PropTypes.object,
  onOpenModal: PropTypes.func.isRequired,
  openModal: PropTypes.bool
}

export default ModalProduct
