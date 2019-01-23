import React from 'react';
import { View, StatusBar } from 'react-native';
import styles from './styles';
import { Header } from 'components';

export default ({ children, tint, header }) => {
  return (
    <View style={styles.screen}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={tint ? 'light-content' : 'dark-content'}
      />
      <Header header={header} />
      <View style={styles.content}>{children}</View>
    </View>
  );
};
