import React from 'react'
import { View, Text } from 'react-native'
import ListItem from './ListItem'

export default function List(props) {
  const { data, onPress } = props
  handleButtonItem = sku => {
    onPress(sku)
  }
  function renderList() {
    return data.map((item, index) => {
      return (
        <View key={index} style={{ paddingBottom: 10 }}>
          <ListItem {...item} onPress={() => handleButtonItem(item.sku)} />
        </View>
      )
    })
  }
  return <View style={{ flex: 1 }}>{renderList()}</View>
}
