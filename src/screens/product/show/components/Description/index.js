import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Icon } from 'components';
import { htmlStrip } from 'utils';
import tabStyles from './styles';

export default class Description extends Component {
  state = {
    hidden: true
  };

  toggleArea = () => {
    this.setState(state => {
      return {
        hidden: !state.hidden
      };
    });
  };

  render() {
    const { hidden } = this.state;
    const { size, title, text, buttonText } = this.props;
    const styles = tabStyles({ hidden, size });
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.hiddenArea}>
          <Text style={styles.text}>{htmlStrip(text)}</Text>
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={this.toggleArea}>
            <Text style={styles.buttonText}>
              {hidden ? buttonText : 'Esconder'}
            </Text>
            <Icon
              name={hidden ? 'chevron-down' : 'chevron-up'}
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
