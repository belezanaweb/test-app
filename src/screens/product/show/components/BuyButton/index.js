import React, { PureComponent } from 'react';
import { Alert } from 'react-native';
import { Button } from 'components';

export default class Description extends PureComponent {
  handleBuyProduct = () => {
    Alert.alert('Sucesso!', 'Adicionamos o produto a sua sacola.');
  };

  render() {
    return <Button text="COMPRE" onPress={this.handleBuyProduct} />;
  }
}
