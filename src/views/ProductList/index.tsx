import React, { useEffect, useContext } from 'react'

import { Button, Loading } from '../../components'
import ProductContext from '../../context/ProductContext'
import List from './../../components/List/index'
import * as S from './styles'

type Props = { navigation: any }

const ProductList = ({ navigation }: Props) => {
  const {
    products,
    getData,
    fetchMoreData,
    productSizeList,
    loading,
    loadingMore,
    sizeOfPagination
  } = useContext(ProductContext)

  const showLoadingMoreButton = productSizeList === sizeOfPagination

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function renderLoadingMoreProducts() {
    if (loadingMore) {
      return <Loading />
    }
    if (showLoadingMoreButton) {
      return (
        <S.ContainerButton>
          <Button m-4 onPress={fetchMoreData} secondary>
            Carregar mais produtos
          </Button>
        </S.ContainerButton>
      )
    }
    return null
  }

  if (loading) {
    return <Loading />
  }

  return (
    <List
      data={products}
      extraData={products}
      ListFooterComponent={renderLoadingMoreProducts}
      navigation={navigation}
    />
  )
}

export default ProductList
