import React, { useEffect, useState, useCallback, useMemo } from 'react'
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from 'react-native'
import Button from '../../components/Button'
import Card from '../../components/Card'

import { useProduct } from '../../Contexts/Products'

import { listProducts } from '../../service/basic'
import * as S from './styles'

const ProductList = () => {
  const { products, setProducts } = useProduct()
  const [loading, setLoading] = useState(false)
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [page, setPage] = useState(1)

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const { data } = await listProducts(page)
      if (data) {
        setIsDataLoaded(true)
        setPage(state => state + 1)
        return setProducts([...products, ...data])
      }
    } catch (e) {
      console.log('error')
    } finally {
      setLoading(false)
    }
  }

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 145,
      offset: 145 * index,
      index
    }),
    []
  )

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      {!isDataLoaded ? (
        <ActivityIndicator style={{ flex: 1 }} size="large" />
      ) : (
        <SafeAreaView>
          <FlatList
            data={products}
            getItemLayout={getItemLayout}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <View style={{ padding: 10 }}>
                <Button testID="ProductList Button" isLoading={loading} onPress={fetchProducts}>
                  Carregar mais produtos
                </Button>
              </View>
            }
            renderItem={({ item }) => (
              <S.ContainerItem>
                <Card data={item} />
              </S.ContainerItem>
            )}
            keyExtractor={item => item.sku}
          />
        </SafeAreaView>
      )}
    </>
  )
}

export default ProductList
