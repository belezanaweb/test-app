import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'components';
import buttonStyles from './styles';

export default ({ showContent, onPress }) => {
  const styles = buttonStyles({ showContent });
  return (
    <View style={styles.containerButton}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>
          {!showContent ? 'Continuar Lendo' : 'Esconder'}
        </Text>
        <Icon
          name={!showContent ? 'chevron-down' : 'chevron-up'}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
