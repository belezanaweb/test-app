import React from 'react';
import { View, Text } from 'react-native';
import { formatCurrency } from 'utils';
import styles from './styles';

export default ({ priceSpecification }) => {
  return (
    <View>
      {priceSpecification.discount > 0 ? (
        <Text style={styles.maxPrice}>
          {formatCurrency(priceSpecification.maxPrice)}
        </Text>
      ) : null}
      <Text style={styles.price}>
        {formatCurrency(priceSpecification.price)}
      </Text>
      <Text style={styles.installments}>
        {`${priceSpecification.installments.numberOfPayments} x de `}
        {formatCurrency(priceSpecification.installments.monthlyPayment)}
      </Text>
    </View>
  );
};
