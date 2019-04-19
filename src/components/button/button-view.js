import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { customButton, customText } from './buttom-style';

export class Button extends Component {
  render() {
    const { type, text, action } = this.props;

    return (
      <View style={customButton(type)}>
        <Text style={customText(type)}>
          { text }
        </Text>
      </View>
    );
  }
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
};

export default Button;
