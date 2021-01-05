import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ProductListItem from '../ProductListItem'
import Button from '../Button'
import { fetchProducts } from '../../stores/products/productsAction'
import Loading from '../Loading'
import { Container, ListContainer } from './ProductList.styles'

const ProductList = ({ itemsPerRequest, onButtonPress }) => {
  const productStore = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    if (productStore.items.length < itemsPerRequest) {
      dispatch(fetchProducts(itemsPerRequest))
    }
  }, [productStore.items.length, itemsPerRequest, dispatch])

  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Container>
          <ListContainer>
            {productStore.items.map((product, index) => {
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
          {!productStore.finished && !productStore.isFetchingList && (
            <Button onPress={() => dispatch(fetchProducts(itemsPerRequest))} secondary>
              Carregar mais produtos
            </Button>
          )}
        </Container>
      </ScrollView>
      {productStore.isFetchingList && <Loading />}
    </>
  )
}

export default ProductList
