import React, { useEffect, useState, useCallback, useRef } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Button from '../../components/Button'
import Card from '../../components/Card'
import { useProduct } from '../../Contexts/Products'
import { listProducts, filterProduct } from '../../service/basic'
import * as S from './styles'

const ProductList = () => {
  const { products, setProducts } = useProduct()
  const [loading, setLoading] = useState(false)
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const [page, setPage] = useState(1)
  const navigation = useNavigation()
  const flatListRef = useRef<FlatList>(null)

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const { data } = await listProducts(page)

      if (data) {
        setIsDataLoaded(true)
        console.log(data)
        setPage(state => state + 1)
        return setProducts([...products, ...data])
      }
    } catch (e) {
      flatListRef.current?.scrollToIndex({ animated: true, index: 0 })
    } finally {
      setLoading(false)
    }
  }

  const handleProductSelected = async (sku: string) => {
    setLoading(true)
    try {
      const { data } = await filterProduct(sku)

      if (data) {
        navigation.navigate('Detalhes do produto', data)
      }
    } catch (e) {
    } finally {
      setLoading(false)
    }
  }

  const getItemLayout = useCallback(
    (_, index) => ({
      length: 145,
      offset: 145 * index,
      index,
    }),
    [],
  )

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      {!isDataLoaded ? (
        <S.ContainerFirstLoading>
          <S.Loading size="large" color="white" />
        </S.ContainerFirstLoading>
      ) : (
        <SafeAreaView>
          {loading && <S.LoadingNext size="large" />}
          <FlatList
            ref={flatListRef}
            data={products}
            getItemLayout={getItemLayout}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              <S.ContainerButton>
                <Button
                  outline={true}
                  testID="ProductList Button"
                  isLoading={loading}
                  onPress={fetchProducts}
                >
                  Carregar mais produtos
                </Button>
              </S.ContainerButton>
            }
            renderItem={({ item }) => (
              <S.ContainerItem>
                <Card
                  onPress={() => handleProductSelected(item.sku)}
                  data={item}
                />
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
