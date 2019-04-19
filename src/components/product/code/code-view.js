import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { normalGrey, black } from '../../../styles/color';

export class Code extends Component {
  render() {
    const { name, text, view } = this.props;
    const nameJSX = name
      ? <Text style={customName(view)}>{name}</Text>
      : <View />;

    return (
      <View style={customView(view)}>
        { nameJSX }
        <Text style={customCode(view)}>
          { text }
        </Text>
      </View>
    );
  }
}

Code.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  view: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  codeBig: {
    color: normalGrey,
    // fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    // lineHeight: 'normal',
    position: 'absolute',
    right: 0,
    textAlign: 'right',
    top: 23,
    width: 112,
  },
  codeSmall: {
    bottom: 0,
    color: normalGrey,
    // fontFamily: "Roboto",
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'bold',
    left: 5,
    // lineHeight: 'normal',
    position: 'absolute',
    textAlign: 'center',
    width: 112,
  },
  nameBig: {
    color: black,
    fontSize: 20,
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    position: 'absolute',
    right: 0,
    textAlign: 'right',
    top: -5,
  },
  nameSmall: {
    display: 'none',
  },
  viewDetails: {
    left: 0,
    position: 'relative',
    top: 50,
  },
  viewList: {
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
const customCode = bool => (bool ? styles.codeBig : styles.codeSmall);
const customName = bool => (bool ? styles.nameBig : styles.nameSmall);
const customView = bool => (bool ? styles.viewDetails : styles.viewList);

export default Code;
