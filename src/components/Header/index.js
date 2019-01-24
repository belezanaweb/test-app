import React from 'react';
import { Icon } from 'components';
import { View, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { substr } from 'utils';
import styles from './styles';

const Header = ({ title, goBack, navigation }) => {
  if (!title) return null;
  return (
    <View style={styles.container}>
      {goBack ? (
        <View style={styles.containerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" style={styles.goBack} />
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={styles.containerCenter}>
        <Text style={styles.title}>{substr(title.toUpperCase(), 25)}</Text>
      </View>
    </View>
  );
};

export default withNavigation(Header);
