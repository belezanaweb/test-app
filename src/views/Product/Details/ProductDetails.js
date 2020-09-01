/**
 * @author Vanderson de Moura Vauruk
 */

import React, { Fragment, useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native'

import { getProductAction } from '../../../services/api'

import Styles from './ProductDetails.styles'
import Theme from '../../../Theme'
import Loading from '../../Loading'
import ProductImage from '../ProductImage'
import Price from '../Item/Price'

const ProductDetails: () => React$Node = ({ route, navigation }) => {
  const [product, setProduct] = useState(undefined)
  const [loading, setLoading] = useState(true)

  const { sku } = route.params
  useEffect(() => {
    if (sku) {
      setLoading(true)
      getProductAction(sku).then(res => {
        if (res.status !== 200) {
          throw 'Error in load product'
        }
        setLoading(false)
        setProduct(res.data)
        console.log('getProductAction ', res.data)
      })
    }
  }, [])

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {!loading && (
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles.scrollView}>
            <View style={Styles.header}>
              <Text style={Styles.fontHeader}>Detalhes de PRODUTOS</Text>
            </View>
            <View style={Theme.item}>
              <View>
                <Text style={Styles.textTop}>{product?.name}</Text>
                <View style={Styles.image}>
                  <ProductImage imageObjects={product?.imageObjects} width={163} height={163} />
                </View>
              </View>

              <View
                style={[
                  {
                    flexDirection: 'row',
                    padding: 10
                  }
                ]}
              >
                <View style={{ flex: 0.5 }}>
                  <Price item={product} withPriceSpecification={true} />
                </View>
                <View style={{ flex: 0.5, alignItems: 'flex-end' }}>
                  <Text style={Styles.brand}>{product?.brand?.name}</Text>
                  <Text style={Theme.textCode}>cod: {product.sku}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
        {loading && <Loading />}
      </SafeAreaView>
    </Fragment>
  )
}

export default ProductDetails
