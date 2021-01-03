import React, { useEffect } from 'react'
import ListItem from '../components/ProductListItem'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../stores/products/productsAction'
import styled from 'styled-components'
import { ScrollView } from 'react-native'

const ProductList = ({ itemsPerRequest, onButtonPress }) => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.items.length < itemsPerRequest) {
      dispatch(fetchProducts(itemsPerRequest))
    }
  }, [products.items.length, itemsPerRequest, dispatch])

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Container>
        <ListContainer>
          {products.items.map(product => {
            const featuredImageObject = product.imageObjects.find(
              imageObject => imageObject.featured
            )
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
        </ListContainer>
        {!products.finished && (
          <Button secondary onPress={() => dispatch(fetchProducts(itemsPerRequest))}>
            Carregar mais produtos
          </Button>
        )}
      </Container>
    </ScrollView>
  )
}

const Container = styled.ScrollView`
  padding: 0 10px 10px 10px;
`

const ListContainer = styled.View`
  margin-bottom: 10px;
`

export default ProductList
