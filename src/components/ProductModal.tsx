import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Dimensions, StyleSheet, Image } from 'react-native';
import Touchable from 'react-native-touchable-safe';
import Modal from "react-native-modal";
import ProductListItem from './ProductListItem';
import { ThemeColors, ThemeStyles } from '../theme/Theme';
import { systemWeights } from 'react-native-typography';
import FloatingLabelInput from './FloatingLabelInput';

const deviceWidth = Dimensions.get('window').width;
const Close = require('../assets/img/close.png');

const ProductModal = (props: any) => {
  const [ visible, setVisible ] = useState(true);
  const [ userName, setUserName ] = useState('');
  const [ userEmail, setUserEmail ] = useState('');
  const { product, onClose, onChangeText, template } = props;

  const close = () => {
    setVisible(false);
    onClose();
  }

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={close}
      onBackButtonPress={close}
      useNativeDriver={true}
      hideModalContentWhileAnimating={true}
      avoidKeyboard={true}
      animationIn={'slideInUp'}
      animationOut={'fadeOut'}
      animationInTiming={300}
      animationOutTiming={300}
      backdropTransitionInTiming={350}
      backdropTransitionOutTiming={350}
      backdropOpacity={.7}
      style={{ zIndex: 99999999 }}
      customBackdrop={
        <TouchableWithoutFeedback onPress={close}>
          <View style={{ flex: 1, backgroundColor: '#000', position: 'absolute', left: 0, top: 0, width: '100%', height: '120%' }} />
        </TouchableWithoutFeedback>
      }
    >
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={close} hitSlop={{ left: 20, top: 20, right: 20, bottom: 20 }}>
            <View style={styles.closeBtn}>
              <Image source={Close} style={styles.closeBtnImage} />
            </View>
          </TouchableWithoutFeedback>

          { template === 'orderSuccess' &&
            <>
              <Text style={styles.modalTitle}>Adicionado ao carrinho!</Text>

              <View style={styles.modalContent}>
                <ProductListItem
                  product={product}
                  showButton={false}
                  hideBg={true}
                />

                <View style={styles.modalButton}>
                  <Touchable onPress={close} testID='CloseButton'>
                    <View style={ThemeStyles.solidButton.container}>
                      <Text style={ThemeStyles.solidButton.text}>Continuar comprando</Text>
                    </View>
                  </Touchable>
                </View>
              </View>
            </>
          }

          { template === 'outOfStock' &&
            <>
              <Text style={styles.modalTitle}>Avise-me quando chegar</Text>

              <View style={styles.modalContent}>
                <View style={styles.modalForm}>
                  <FloatingLabelInput
                    label='Nome'
                    textContentType='name'
                    blurOnSubmit={false}
                    noValidation={true}
                    onChangeText={(ref: any, text: string) => { setUserName(text); onChangeText(text); }}
                    defaultValue=''
                    value={userName}
                    alwaysEnabled={false}
                    primaryColor={ThemeColors.primary}
                    placeholderTextColor={ThemeColors.primary}
                    borderBottomColor={ThemeColors.primary}
                    testID="nameInput"
                  />

                  <FloatingLabelInput
                    label='E-mail'
                    textContentType='emailAddress'
                    blurOnSubmit={false}
                    noValidation={true}
                    onChangeText={(ref: any, text: string) => { setUserEmail(text); onChangeText(text); }}
                    defaultValue=''
                    value={userEmail}
                    alwaysEnabled={false}
                    primaryColor={ThemeColors.primary}
                    placeholderTextColor={ThemeColors.primary}
                    borderBottomColor={ThemeColors.primary}
                    testID="emailInput"
                  />
                </View>

                <View style={styles.modalButton}>
                  <Touchable onPress={close} testID='SendButton'>
                    <View style={ThemeStyles.solidButton.container}>
                      <Text style={ThemeStyles.solidButton.text}>Enviar</Text>
                    </View>
                  </Touchable>
                </View>
              </View>
            </>
          }
        </View>
      </View>
    </Modal>
  )
}

ProductModal.defaultProps = {
  product: {},
  onClose: /* istanbul ignore next */ () => {},
  onChangeText: /* istanbul ignore next */ () => {},
  template: 'orderSuccess',
}

const styles = StyleSheet.create({
  closeBtn: {
    flex: 1,
    position:'absolute',
    top: 15,
    left: 15,
    zIndex: 99999,
  },
  closeBtnImage: {
    flex: 1,
    width: 35,
    height: 35,
  },
  container: {
    paddingTop: 18,
    borderRadius: 5,
    width: deviceWidth * .87,
    minHeight: 280,
    backgroundColor: '#ffffff',
  },
  modalTitle: {
    fontSize: 21,
    ...systemWeights.semibold,
    color: ThemeColors.black,
    position:'absolute',
    top: 21,
    left: 60,
    zIndex: 99999,
  },
  modalContent: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 15,
  },
  modalForm: {
    padding: 15,
  },
  modalButton: {
    paddingHorizontal: 15,
  },
});

export default ProductModal;
