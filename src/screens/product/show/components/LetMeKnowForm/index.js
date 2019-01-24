import React, { Component } from 'react';
import { Modal, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Button, Screen } from 'components';
import styles from './styles';

class CustomModal extends Component {
  state = {
    modalVisible: this.props.visible || false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  closeModal = () => {
    this.setModalVisible(false);
  };

  render() {
    return (
      <View style={styles.wrap}>
        <Button
          text="AVISE-ME"
          clean
          bordered
          onPress={() => this.setModalVisible(true)}
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
          transparent
        >
          <Screen>
            <View style={styles.container}>
              <View style={styles.header}>
                <Text style={styles.textTitle}>AVISE-ME</Text>
              </View>

              <View style={styles.content}>
                <View style={styles.containerForm}>
                  <View style={styles.formControl}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Seu nome"
                    />
                  </View>
                  <View style={styles.formControl}>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Seu email"
                    />
                  </View>
                  <View style={styles.formControl}>
                    <Button
                      text="Avise-me"
                      flex={2}
                      onPress={this.closeModal}
                    />
                    <Button text="Cancelar" clean onPress={this.closeModal} />
                  </View>
                </View>
              </View>
            </View>
          </Screen>
        </Modal>
      </View>
    );
  }
}

export default CustomModal;
