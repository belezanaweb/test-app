import React from 'react'
import { FlatList } from 'react-native'

import { ItemList } from '../'

const List = props => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={item => item.sku}
      renderItem={({ item }) => <ItemList {...item} navigation={props.navigation} />}
      {...props}
    />
  )
}

export default List
