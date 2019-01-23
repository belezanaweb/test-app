import React, { Component } from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { Screen } from 'components';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';

class AuthLoading extends Component {
  componentWillMount() {
    this.checkUser();
  }

  checkUser = async () => {
    //just a check point for authenticated users
    setTimeout(() => {
      this.props.navigation.navigate('App');
    }, 1000);
  };

  render() {
    return (
      <Screen tint>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('images/logo.png')} />
          <ActivityIndicator color={EStyleSheet.value('$purple')} />
        </View>
      </Screen>
    );
  }
}

export default AuthLoading;
