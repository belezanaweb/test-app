import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Teste } from './style'

export default class ProductsScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text> Home </Text>
        <Button
          onPress={() => {
            navigate('ProdDescription')
          }}
          title="Press Me"
        />
        <Teste>Teste de styled component</Teste>
      </View>
    );
  }
}