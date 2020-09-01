/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Fragment, useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, View, Text, StatusBar, TouchableOpacity } from 'react-native'

import Styles from './ProductList.styles'
import { productListAction } from '../../services/api'
import ProductItem from './Item'
import Loading from '../Loading'

const ProductList: () => React$Node = ({ navigation }) => {
  const [productList, setProductList] = useState(undefined)
  const [pageNum, setPageNum] = useState(1)
  const [pageSize, setPageSize] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    productListAction(pageNum, pageSize).then(res => {
      if (res.status !== 200) {
        throw 'Error in load product'
      }
      setLoading(false)
      setProductList(res.data)
      console.log('lista ', res.data)
    })
  }, [])

  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {!loading && (
          <ScrollView contentInsetAdjustmentBehavior="automatic" style={Styles.scrollView}>
            <View style={Styles.header}>
              <Text style={Styles.fontHeader}>LISTA PRODUTOS</Text>
            </View>
            {productList?.map((item, index) => (
              <ProductItem key={index} item={item} navigation={navigation} />
            ))}
            <View style={Styles.buttonFooter}>
              <TouchableOpacity style={Styles.button}>
                <Text style={Styles.buttonText}>carregar mais produtos</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
        {loading && <Loading />}
      </SafeAreaView>
    </Fragment>
  )
}

export default ProductList
