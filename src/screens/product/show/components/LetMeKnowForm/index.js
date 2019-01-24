import React, { Component } from 'react';
import { Modal, Text, View, Alert, TextInput } from 'react-native';
import { Button } from 'components';
import styles from './styles';

class CustomModal extends Component {
  state = {
    modalVisible: this.props.visible || false
  };

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  closeModal = () => {
    this.toggleModal(false);
  };
  letMeKnowPress = () => {
    //this timeout to fix ios bug
    //on showing alert right after close a modal
    setTimeout(() => {
      Alert.alert(
        'Sucesso!',
        'Você será avisado assim que esse produto chegar!'
      );
    }, 500);
  };
  handleSubmit = () => {
    this.setState(
      state => {
        return { modalVisible: false };
      },
      () => {
        this.letMeKnowPress();
      }
    );
  };

  render() {
    const { modalVisible } = this.state;
    if (!modalVisible) {
      return (
        <Button
          text="AVISE-ME"
          clean
          bordered
          onPress={() => this.toggleModal(true)}
        />
      );
    }
    return (
      <Modal
        animationType="fade"
        visible={this.state.modalVisible}
        onRequestClose={() => {}}
        transparent
      >
        <View style={styles.wrap}>
          <View style={styles.container}>
            <View style={styles.modalHeader}>
              <Text style={styles.textTitle}>AVISE-ME</Text>
            </View>
            <View style={styles.modalContent}>
              <View style={styles.formControl}>
                <TextInput style={styles.textInput} placeholder="Seu nome" />
              </View>
              <View style={styles.formControl}>
                <TextInput style={styles.textInput} placeholder="Seu email" />
              </View>
              <View style={styles.formControl}>
                <Button text="Avise-me" flex={2} onPress={this.handleSubmit} />
                <Button text="Cancelar" clean onPress={this.closeModal} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default CustomModal;
