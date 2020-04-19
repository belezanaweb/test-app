import React from 'react'

import { ItemList } from '../components'
import data from '../products.json'

export default function DetailsProduct(props) {
  const { sku, index } = props.route.params

  return <ItemList {...data[index]} />
}
