import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { htmlStrip } from 'utils';
import styles from './styles';

export default class Description extends Component {
  render() {
    const { description } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Descrição do Produto</Text>
        <View style={styles.hiddenArea}>
          <Text style={styles.text}>{htmlStrip(description)}</Text>
        </View>
      </View>
    );
  }
}
