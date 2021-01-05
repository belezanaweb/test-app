import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
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

  const renderItem = ({ item, index }) => {
    const featuredImageObject = item.imageObjects.find(imageObject => imageObject.featured)
    return (
      <ProductListItem
        currentPrice={item.priceSpecification.price}
        image={featuredImageObject?.small}
        isFirstItem={index === 0}
        key={item.sku}
        onButtonPress={onButtonPress}
        previousPrice={item.priceSpecification.maxPrice}
        sku={item.sku}
        title={item.name}
      />
    )
  }

  return (
    <>
      <Container>
        <ListContainer>
          <FlatList
            data={productStore.items}
            keyExtractor={item => item.sku}
            renderItem={renderItem}
          />
        </ListContainer>
        {!productStore.finished && !productStore.isFetchingList && (
          <Button onPress={() => dispatch(fetchProducts(itemsPerRequest))} secondary>
            Carregar mais produtos
          </Button>
        )}
      </Container>
      {productStore.isFetchingList && <Loading />}
    </>
  )
}

export default ProductList
