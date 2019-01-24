import React from 'react';
import { View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import styles from './styles';

export default ({ children }) => {
  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} forceInset={{ top: 'always' }} />
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <View style={styles.content}>{children}</View>
      <SafeAreaView style={styles.safeArea} forceInset={{ top: 'bottom' }} />
    </View>
  );
};
