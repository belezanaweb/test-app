import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import List from '../components/List'
import Button from '../components/Button'
import { LOAD_MORE, LOADING } from '../constants/strings'
import api from '../services/productApi'
export default function ListView({ navigation }) {
  const [data, setData] = useState(null)
  const [index, setIndex] = useState(1)
  useEffect(() => {
    loadList(index, 3).then(response => {
      setData(response)
    })
  }, [])

  handleListItemButtonOnPress = sku => {
    navigation.navigate('Detail', { sku })
  }
  handleLoadMoreButtonOnPress = () => {
    setData(null)
    loadList(index + 1, 3).then(response => {
      setData(response)
    })
    setIndex(index + 1)
  }

  async function loadList(page, pageSize) {
    const response = await api.get(`?page=${page}&size=${pageSize}`)
    return response.data
  }
  function render() {
    return data ? (
      <React.Fragment>
        <View style={styles.contentContainer}>
          <List data={data} onPress={handleListItemButtonOnPress} />
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={handleLoadMoreButtonOnPress} secondary>
            {LOAD_MORE}
          </Button>
        </View>
      </React.Fragment>
    ) : (
      <View style={styles.loading}>
        <Text style={styles.loadingLabel}>{LOADING}</Text>
      </View>
    )
  }
  return <View style={styles.container}>{render()}</View>
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { flex: 1, margin: 10 },
  buttonContainer: { marginHorizontal: 10, marginBottom: 10 },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6C00'
  },
  loadingLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    lineHeight: 22
  }
})
