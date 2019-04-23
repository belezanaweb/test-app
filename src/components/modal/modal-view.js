import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  orange, darkOrange,
} from '../../styles/color';
import setItem from '../../redux/actions/actions';

const modalType = (description, stock) => {
  if (stock > 0) {
    return (
      <Text style={styles.description}>
        { description }
      </Text>
    );
  }

  return (
    <TextInput
      keyboardType="email-address"
      placeholder="Digite seu E-mail"
      style={{
        borderColor: 'gray',
        borderRadius: 15,
        borderWidth: 1,
        height: 40,
        marginTop: '20%',
        paddingLeft: 15,
      }}
    />
  );
};

export class ModalTest extends Component {
  render() {
    const {
      description, name, stock,
    } = this.props;

    return (
      <View style={styles.background}>
        <View style={styles.content}>
          <Text style={styles.title}>
            { (stock > 0) ? name : 'Desculpe acabaram nossos estoques' }
          </Text>
          { modalType(description, stock) }
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const clean = {};
              setItem({ ...clean, type: false });
            }}
          >
            <Text style={styles.buttonText}>
              { (stock > 0) ? 'Adicionar Carrinho' : 'AVISE-ME'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ModalTest.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  button: {
    backgroundColor: orange,
    borderRadius: 15,
    bottom: 30,
    left: '15%',
    position: 'absolute',
    width: '100%%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 15,
    height: 300,
    marginLeft: '10%',
    marginTop: '25%',
    padding: 30,
    shadowColor: '#000000',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.2,
    width: '80%',
  },
  description: {
    marginTop: '30%',
  },
  title: {
    color: darkOrange,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ModalTest;
