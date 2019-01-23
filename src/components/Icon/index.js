import React, { PureComponent } from 'react';
import styles from './styles';
import { Icon as CustomIcon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

export default class Icon extends PureComponent {
  render() {
    if (this.props.onPress) {
      return (
        <TouchableOpacity onPress={this.props.onPress}>
          <CustomIcon
            iconStyle={[styles.icon, this.props.style]}
            type={this.props.type || 'material-community'}
            name={this.props.name}
          />
        </TouchableOpacity>
      );
    }

    return (
      <CustomIcon
        iconStyle={[styles.icon, this.props.style]}
        type={this.props.type || 'material-community'}
        name={this.props.name}
      />
    );
  }
}
