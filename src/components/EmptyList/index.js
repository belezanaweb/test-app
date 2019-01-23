import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

export default ({ message }) => {
  return (
    <View style={styles.container}>
      <Text>{message || 'Nenhum registro encontrado!'}</Text>
    </View>
  );
};
