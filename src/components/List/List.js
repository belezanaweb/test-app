import React from 'react'
import { FlatList } from 'react-native'

import { ItemList } from '../'

const List = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.sku}
      renderItem={({ item }) => <ItemList {...item} />}
    />
  )
}

export default List
