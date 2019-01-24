import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import buttonStyles from './styles';

export default ({
  primary,
  clean,
  bordered,
  loading,
  onPress,
  text,
  disabled,
  flex
}) => {
  const activityColor = clean
    ? EStyleSheet.value('$primary')
    : EStyleSheet.value('$white');

  const styles = buttonStyles({ primary, clean, bordered, flex });
  if (disabled) {
    return (
      <View style={[styles.container, styles.disabled]}>
        <Text style={[styles.text, styles.textDisabled]}>...</Text>
      </View>
    );
  }
  if (loading) {
    return (
      <View style={[styles.container, styles.loading]}>
        <ActivityIndicator color={activityColor} />
        <Text style={[styles.text, styles.textLoading]}>Aguarde...</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
