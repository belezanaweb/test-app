import React, { Component } from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import { Button } from 'components';
import styles from './styles';

class CustomModal extends Component {
  state = {
    modalVisible: this.props.visible || false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleSubmitForm = () => {
    Alert.alert(
      'Pronto!',
      'Você será avisado assim que esse produto chegar em nossa loja.'
    );
    
    setTimeout(() => {
      this.setModalVisible(false);
    }, 1000);
  };

  render() {
    return (
      <View style={styles.wrap}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
          transparent
        >
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.textTitle}>{this.props.title}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.content}>
              <View style={styles.containerForm}>
                <View style={styles.formControl}>
                  <TextInput style={styles.textInput} placeholder="Seu nome" />
                </View>
                <View style={styles.formControl}>
                  <TextInput style={styles.textInput} placeholder="Seu email" />
                </View>
                <View style={styles.formControl}>
                  <Button text="Avise-me" onPress={this.handleSubmitForm} />
                </View>
              </View>
            </View>
          </View>
        </Modal>
        <Button
          text="AVISE-ME"
          clean
          bordered
          onPress={() => this.setModalVisible(true)}
        />
      </View>
    );
  }
}

export default CustomModal;
