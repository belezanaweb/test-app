import React, { useEffect, useState } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import Button from '../../components/Button'
import Card from '../../components/Card'

import { useProduct } from '../../Contexts/Products'

import { listProducts } from '../../service/basic'

const ProductList = () => {
  const { products, setProducts } = useProduct()
  const [loading, setLoading] = useState(false)

  const fetchProducts = async () => {
    try {
      const response = await listProducts(1)

      if (response.status === 200 && response.data) {
        return setProducts(response.data)
      }
    } catch (e) {
      console.log('error')
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      {loading ? (
        <ActivityIndicator style={{ flex: 1 }} size="large" />
      ) : (
        <View>
          <Card />
          <TouchableOpacity>
            <Text>Check</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}

export default ProductList
