import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductListItem from '../ProductListItem'
import Button from '../Button'
import { fetchProducts } from '../../stores/products/productsAction'
import Loading from '../Loading'
import { Container, ListContainer } from './ProductList.styles'

const ProductList = ({ itemsPerRequest, onButtonPress }) => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.items.length < itemsPerRequest) {
      dispatch(fetchProducts(itemsPerRequest))
    }
  }, [products.items.length, itemsPerRequest, dispatch])

  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Container>
          <ListContainer>
            {products.items.map((product, index) => {
              const featuredImageObject = product.imageObjects.find(
                imageObject => imageObject.featured
              )
              return (
                <ProductListItem
                  currentPrice={product.priceSpecification.price}
                  image={featuredImageObject?.small}
                  isFirstItem={index === 0}
                  key={product.sku}
                  onButtonPress={onButtonPress}
                  previousPrice={product.priceSpecification.maxPrice}
                  sku={product.sku}
                  title={product.name}
                />
              )
            })}
          </ListContainer>
          {!products.finished && !products.loading && (
            <Button onPress={() => dispatch(fetchProducts(itemsPerRequest))} secondary>
              Carregar mais produtos
            </Button>
          )}
        </Container>
      </ScrollView>
      {products.loading && <Loading />}
    </>
  )
}

export default ProductList
