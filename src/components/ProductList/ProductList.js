import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import ProductListItem from '../ProductListItem'
import { fetchProducts } from '../../stores/products/productsAction'
import Loading from '../Loading'
import { ProductsFlatList, FetchButton } from './ProductList.styles'

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

  renderItem.propTypes = {
    item: PropTypes.shape({
      imageObjects: PropTypes.array.isRequired,
      priceSpecification: PropTypes.shape({
        price: PropTypes.number.isRequired,
        maxPrice: PropTypes.number
      }),
      sku: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    }),
    index: PropTypes.number.isRequired
  }

  return (
    <>
      <ProductsFlatList
        data={productStore.items}
        /* eslint-disable-next-line react/prop-types */
        keyExtractor={item => item.sku}
        ListFooterComponent={() => {
          if (!productStore.finished && !productStore.isFetchingList) {
            return (
              <FetchButton onPress={() => dispatch(fetchProducts(itemsPerRequest))} secondary>
                Carregar mais produtos
              </FetchButton>
            )
          }
          return null
        }}
        renderItem={renderItem}
      />
      {productStore.isFetchingList && <Loading />}
    </>
  )
}

ProductList.propTypes = {
  itemsPerRequest: PropTypes.number.isRequired,
  onButtonPress: PropTypes.func.isRequired
}

export default ProductList
