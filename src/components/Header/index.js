import React from 'react';
import { Icon } from 'components';
import { View, TouchableOpacity, Text } from 'react-native';
import { withNavigation, SafeAreaView } from 'react-navigation';
import { substr } from 'utils';
import styles from './styles';

const Header = ({ header, navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea} forceInset={{ top: 'always' }}>
      {!header ? (
        <View />
      ) : (
        <View style={styles.container}>
          {header.goBack ? (
            <View style={styles.containerLeft}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" style={styles.goBack} />
              </TouchableOpacity>
            </View>
          ) : null}
          <View style={styles.containerCenter}>
            {header.title ? (
              <Text style={styles.title}>
                {substr(header.title.toUpperCase(), 25)}
              </Text>
            ) : null}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default withNavigation(Header);
