import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

export class ImageProduct extends Component {
  render() {
    const { url, view } = this.props;

    return (
      <Image
        style={custom(view)}
        source={{ url }}
      />
    );
  }
}

ImageProduct.propTypes = {
  url: PropTypes.string.isRequired,
  view: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  imageBig: {
    height: 163,
    margin: 12,
    marginLeft: 58,
    position: 'relative',
    width: 163,
  },
  imageSmall: {
    height: 108,
    margin: 5,
    position: 'absolute',
    width: 108,
  },
});
const custom = (bool) => {
  if (bool) {
    return styles.imageBig;
  }
  return styles.imageSmall;
};

export default ImageProduct;
