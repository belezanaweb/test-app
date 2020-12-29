import React, { useEffect } from 'react'
import ListItem from '../components/ProductListItem'
import FullWidthButton from '../components/FullWidthButton'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../stores/products/productsAction'
import styled from 'styled-components'
import { ScrollView } from 'react-native'

const ProductList = ({ itemsPerRequest, onButtonPress }) => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.items.length === 0) {
      dispatch(fetchProducts(itemsPerRequest))
    }
  }, [products.items.length, itemsPerRequest, dispatch])

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <ListContainer>
        {products.items.map(product => {
          const featuredImageObject = product.imageObjects.find(imageObject => imageObject.featured)
          return (
            <ListItem
              currentPrice={product.priceSpecification.price}
              image={featuredImageObject?.small}
              key={product.sku}
              onButtonPress={onButtonPress}
              previousPrice={product.priceSpecification.maxPrice}
              sku={product.sku}
              title={product.name}
            />
          )
        })}
        {!products.finished && (
          <FullWidthButton onPress={() => dispatch(fetchProducts(itemsPerRequest))}>
            Carregar mais produtos
          </FullWidthButton>
        )}
      </ListContainer>
    </ScrollView>
  )
}

const ListContainer = styled.View`
  margin: 10px;
`

export default ProductList
