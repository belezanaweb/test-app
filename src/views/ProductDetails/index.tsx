import React, { useState, useEffect, useCallback } from 'react'

import { ItemDetails, Loading } from '../../components'
import { getProduct } from '../../services/products'
import { ProductDetails as DetailsProps } from './../../types/Products'


const ProductDetails = props => {
  const { sku } = props.route.params
  const [product, setProduct] = useState<DetailsProps[]>([])
  const [loading, setLoading] = useState(true)

  const getDetails = useCallback(async () => {
    getProduct(sku)
      .then(newProduct => {
        setLoading(false)
        setProduct(newProduct)
      })
      .catch(e => {
        console.log(e)
      })
  }, [sku])

  useEffect(() => {
    getDetails()
  }, [getDetails])

  if (loading) {
    return <Loading />
  }
  return <ItemDetails item={product} />
}

export default ProductDetails
