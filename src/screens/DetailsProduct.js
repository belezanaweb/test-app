import React, { useState, useEffect } from 'react'

import { ItemDetails, Loading } from '../components'
import { getProductBySku } from '../services/products'

export default function DetailsProduct(props) {
  const { sku } = props.route.params
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProductBySku(sku)
      .then(newProduct => {
        setLoading(false)
        setProduct(newProduct)
      })
      .catch(err => {
        console.log('Não foi possivel carregar os dados', err)
      })
  }, [sku])

  if (loading) {
    return <Loading>Carregando</Loading>
  }
  return <ItemDetails {...product} />
}
