import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { black } from '../../../styles/color';

export class Title extends Component {
  render() {
    const { text, view } = this.props;

    return (
      <Text style={customText(view)}>
        { text }
      </Text>
    );
  }
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
  view: PropTypes.bool.isRequired,
};

const stylesCommon = {
  // lineHeight: "normal",
  color: black,
  // fontFamily: "Roboto",
  fontStyle: 'normal',
  position: 'relative',
};
const styles = StyleSheet.create({
  titleBig: {
    ...stylesCommon,
    fontSize: 22,
    fontWeight: '500',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3,
  },
  titleSmall: {
    ...stylesCommon,
    fontSize: 10,
    fontWeight: 'normal',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
  },
});
const customText = bool => (bool ? styles.titleBig : styles.titleSmall);

export default Title;
