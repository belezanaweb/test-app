import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { black } from '../../styles/color';

export class Header extends Component {
  render() {
    const { type, text } = this.props;

    return (
      <Text style={customText(type)}>
        {text}
      </Text>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
};

const styleCommon = {
  color: black,
  fontSize: 14,
  // fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontWeight: 'bold',
  left: 0,
  position: 'absolute',
  right: 0,
  textAlign: 'center',
  textTransform: 'uppercase',
};
const styles = StyleSheet.create({
  details: {
    ...styleCommon,
    bottom: '91.55%',
    top: '5.63%',
  },
  list: {
    ...styleCommon,
    bottom: '91.55%',
    top: '5.63%',
  },
});
const customText = bool => (bool ? styles.list : styles.details);

export default Header;
