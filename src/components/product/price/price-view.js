import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import {
  customContainer, customInstallments, customText, customTextDiscount,
} from './price-style';

export class Price extends Component {
  render() {
    const {
      view, text, discount, installments,
    } = this.props;
    const discountJSX = discount
      ? <Text style={customTextDiscount(view)}>{discount}</Text>
      : <View />;
    const installmentsJSX = installments
      ? <Text style={customInstallments(view)}>{installments}</Text>
      : <View />;

    return (
      <View style={customContainer(view)}>
        {discountJSX}
        <Text style={customText(discount, view)}>
          {text}
        </Text>
        {installmentsJSX}
      </View>
    );
  }
}

Price.propTypes = {
  discount: PropTypes
    .oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  installments: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  view: PropTypes.bool.isRequired,
};

export default Price;
