import uniqBy from 'lodash/uniqBy'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'

import { SecondaryButton } from '~/components'
import { useFetch } from '~/hooks/useFetch'
import { Container, PageHeader } from '~/styles/baseStyles'
import { theme } from '~/styles/theme'
import ItemCard from './ItemCard'
import { PaddingSeparatorContainer } from './styles'

export default function ProductList() {
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState([])
  const { data } = useFetch(`products?page=${page}&size=5`)

  useEffect(() => {
    if (data) {
      if (products.length) {
        setProducts([...products, ...data])
      } else {
        setProducts(data)
      }
    }
  }, [data])

  return (
    <Container>
      <FlatList
        data={uniqBy(products, 'sku')}
        ListHeaderComponent={() => <PageHeader>lista de produtos</PageHeader>}
        renderItem={({ item }) => <ItemCard product={item} />}
        keyExtractor={item => item.sku}
        ItemSeparatorComponent={() => <PaddingSeparatorContainer padding={5} />}
        ListFooterComponent={() => {
          if (products.length / 5 < page && products.length % 5 === 0) {
            return (
              <PaddingSeparatorContainer>
                <ActivityIndicator size="large" color={theme.colors.orange} />
              </PaddingSeparatorContainer>
            )
          }
          if (products.length > 0 && products.length % 5 === 0) {
            return (
              <PaddingSeparatorContainer>
                <SecondaryButton text="carregar mais" onPress={() => setPage(page + 1)} />
              </PaddingSeparatorContainer>
            )
          }
          return <PaddingSeparatorContainer />
        }}
      />
    </Container>
  )
}
