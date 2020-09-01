/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Text } from 'react-native'
import currencyFormatter from 'currency-formatter'

import Styles, { Colors } from './ProductItem.styles'

const Price: () => React$Node = ({ item, withPriceSpecification }) => {
  const calculateDiscount = () => {
    const price = item?.priceSpecification?.originalPrice
    const discount = item?.priceSpecification?.discount / 100
    let valueDicount = price * discount
    return price - valueDicount
  }
  return (
    <>
      {item?.priceSpecification?.discount > 0 && (
        <Text style={Styles.priceDiscount}>
          {currencyFormatter.format(calculateDiscount(), {
            locale: 'pt-BR'
          })}
        </Text>
      )}
      <Text style={Styles.originalPrice}>
        {currencyFormatter.format(item?.priceSpecification?.originalPrice, {
          locale: 'pt-BR'
        })}
      </Text>
      {withPriceSpecification && (
        <Text styles={Styles.priceSpecification}>{`${
          item.priceSpecification?.installments?.numberOfPayments
        }x de ${currencyFormatter.format(item.priceSpecification?.installments?.monthlyPayment, {
          locale: 'pt-BR'
        })}`}</Text>
      )}
    </>
  )
}

export default Price
