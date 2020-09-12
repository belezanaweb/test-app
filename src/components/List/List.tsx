import React from 'react'
import { FlatList } from 'react-native'

import { ItemList } from '../'
import { Products } from './../../types/Products'

type Props = {
  products: Partial<Products>[],
  navigation: any
}

const List = ({ products, navigation, ...props }: Props) => {
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.sku}
      renderItem={({ item }) => <ItemList item={item} navigation={navigation} />}
      {...props}
    />
  )
}

export default List
