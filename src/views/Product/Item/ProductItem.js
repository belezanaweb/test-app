/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import ProductImage from '../ProductImage'
import currencyFormatter from 'currency-formatter'

import Styles, { Colors } from './ProductItem.styles'
import Theme from '../../../Theme'
import Price from './Price'

const ProductItem: () => React$Node = ({ item, navigation }) => {
  const onPress = () => navigation.navigate('Details', { sku: item.sku })

  return (
    <>
      <View style={Theme.item}>
        <View
          style={[
            {
              flexDirection: 'row',
              padding: 10
            }
          ]}
        >
          <View style={{ flex: 0.3, marginTop: 5, alignContent: 'center', alignItems: 'center' }}>
            <ProductImage imageObjects={item.imageObjects} width={108} height={108} />
            <Text style={[Theme.textCode, { paddingTop: 10 }]}>cod: {item.sku}</Text>
          </View>
          <View style={{ flex: 0.7 }}>
            <Text>{item.name}</Text>
            <View style={{ paddingTop: 5 }}>
              <Price item={item} withPriceSpecification={false} />
            </View>

            <View style={Styles.buttonFooter}>
              <TouchableOpacity style={Styles.button} onPress={onPress}>
                <Text style={Styles.buttonText}>ver detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default ProductItem
