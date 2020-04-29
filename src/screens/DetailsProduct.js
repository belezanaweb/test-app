import React, { useState, useEffect } from 'react'

import { ItemDetails } from '../components'
import { getProductBySku } from '../services/products'

export default function DetailsProduct(props) {
  const { sku } = props.route.params
  const [product, setProduct] = useState()

  useEffect(() => {
    getProductBySku(sku)
      .then(newProduct => {
        setProduct(newProduct)
      })
      .catch(err => {
        console.log('Não foi possivel carregar os dados', err)
      })
  }, [sku])

  return <ItemDetails {...product} />
}
