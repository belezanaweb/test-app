import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export class Container extends Component {
  render() {
    const { children } = this.props;

    return (
      <View style={styles.container}>
        {children}
      </View>
    );
  }
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
    padding: 10,
    paddingTop: 57,
  },
});

export default Container;
