import React from 'react'
import { FlatList } from 'react-native'

import data from '../products.json'
import Item from './Item'

const List = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.sku}
      renderItem={({ item }) => <Item {...item} />}
    />
  )
}

export default List
