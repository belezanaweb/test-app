import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { black, lightDarkGrey } from '../../../styles/color';

export class Description extends Component {
  render() {
    const { text } = this.props;

    return (
      <View style={styles.view}>
        <Text style={styles.title}>Descrição do Produto</Text>
        <View style={styles.viewDescription}>
          <Text style={styles.text}>{text}</Text>
          <View style={styles.viewOpacity} />
        </View>
      </View>
    );
  }
}

Description.propTypes = {
  text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  text: {
    color: lightDarkGrey,
    // fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'normal',
    left: 0,
    lineHeight: 19,
    position: 'relative',
    top: 5,
  },
  title: {
    color: black,
    // fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    height: 19,
    left: 0,
    // letterSpacing: '0.307692',
    lineHeight: 19,
    position: 'relative',
    top: 0,
  },
  view: {
    height: 'auto',
    top: 108,
    width: '100%',
  },
  viewDescription: {
    height: 78,
    overflow: 'hidden',
  },
  viewOpacity: {
    backgroundColor: 'white',
    bottom: 0,
    height: 20,
    left: 0,
    opacity: 0.6,
    position: 'absolute',
    width: '100%',
  },
});

export default Description;
