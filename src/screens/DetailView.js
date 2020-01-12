import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import HTMLView from 'react-native-htmlview'
import { LOADING, CURRENCY, OFF, DESC, VIEW_MORE, BUY, WARN_ME } from '../constants/strings'
import Button from '../components/Button'
import api from '../services/productApi'

import Dropdown from '../assets/svg/dropdown.svg'

export default function DetailView({ navigation }) {
  const [data, setData] = useState(null)
  const [viewMore, setViewMore] = useState(false)
  const [sku, setSku] = useState(null)

  useEffect(() => {
    const pSku = navigation.getParam('sku')
    setSku(pSku)
  }, [])

  useEffect(() => {
    sku &&
      loadItem(sku).then(response => {
        setData(response)
      })
  }, [sku])

  function priceFormatter(price) {
    //Checks if price is an integer
    if (price == parseInt(price)) {
      return price + '.00'
    }
    //Checks if price has only 1 decimal
    else if (Math.round(price * 10) / 10 == price) {
      return price + '0'
    }
    //Covers other cases
    else {
      return Math.round(price * 100) / 100
    }
  }

  async function loadItem(sku) {
    const response = await api.get(`/${sku}`)
    return response.data
  }

  function handleReadMoreOnPress() {
    setViewMore(!viewMore)
  }

  function render() {
    function returnFeaturedImageUri(imageObjects) {
      let uri
      imageObjects.map(image => {
        image.featured === true && (uri = image)
      })
      return uri ? uri.large : ''
    }
    let uri = data ? returnFeaturedImageUri(data.imageObjects) : null
    return data ? (
      <React.Fragment>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.labelNome}>{data.name}</Text>
          <View style={styles.imageContainer}>
            <Image source={{ uri }} style={styles.image} />
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.priceContainer}>
              {data.priceSpecification.maxPrice !== data.priceSpecification.price && (
                <Text style={styles.labelOldPrice}>{`${CURRENCY} ${priceFormatter(
                  data.priceSpecification.maxPrice
                )}`}</Text>
              )}
              <Text style={styles.labelPrice}>{`${CURRENCY} ${priceFormatter(
                data.priceSpecification.price
              )}`}</Text>
              {data.priceSpecification.installments.numberOfPayments !== 1 && (
                <Text style={styles.labelInstallments}>
                  {`${
                    data.priceSpecification.installments.numberOfPayments
                  }x ${OFF} ${CURRENCY} ${priceFormatter(
                    data.priceSpecification.installments.monthlyPayment
                  )}`}
                </Text>
              )}
            </View>
            <View style={styles.infoContentContainer}>
              <Text style={styles.labelBrand}>{data.brand.name}</Text>
              <Text style={styles.labelCod}>{`cod: ${data.sku}`}</Text>
            </View>
          </View>
          <Button secondary={!data.inventory.quantity > 0}>
            {data.inventory.quantity > 0 ? BUY : WARN_ME}
          </Button>
          <Text style={styles.labelDescTitle}>{DESC}</Text>
          <View style={{ height: viewMore ? null : 175 }}>
            <HTMLView
              stylesheet={{ p: { ...styles.labelDesc } }}
              value={`<p>${data.details.description}</p>`}
            ></HTMLView>
          </View>

          <TouchableOpacity style={styles.readMoreContainer} onPress={handleReadMoreOnPress}>
            <Text style={styles.labelReadMore}>{VIEW_MORE}</Text>
            <Dropdown
              style={[styles.dropdownIcon, viewMore ? { transform: [{ rotate: '180deg' }] } : {}]}
            />
          </TouchableOpacity>
        </ScrollView>
      </React.Fragment>
    ) : (
      <View style={styles.loading}>
        <Text style={styles.loadingLabel}>{LOADING}</Text>
      </View>
    )
  }
  return <SafeAreaView style={styles.container}>{render()}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5
  },
  contentContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#FFF'
  },
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
  },
  labelNome: { fontWeight: '500', fontSize: 20, lineHeight: 24, color: '#212121' },
  imageContainer: { marginTop: 12, alignItems: 'center' },
  image: { width: 163, height: 163 },
  infoContainer: { flexDirection: 'row', marginBottom: 7 },
  priceContainer: { flex: 1, alignItems: 'flex-start', justifyContent: 'center' },
  infoContentContainer: { flex: 1, alignItems: 'flex-end', justifyContent: 'center' },
  labelOldPrice: {
    fontSize: 14,
    lineHeight: 18,
    color: '#CCC',
    textDecorationLine: 'line-through',
    textDecorationColor: '#CCC'
  },
  labelPrice: {
    fontWeight: '500',
    lineHeight: 26,
    fontSize: 24,
    color: '#FF6C00'
  },
  labelInstallments: {
    lineHeight: 20,
    fontSize: 17,
    color: '#6F6F6F'
  },
  labelBrand: { fontWeight: '500', fontSize: 20, lineHeight: 24, color: '#212121' },
  labelCod: {
    fontSize: 14,
    color: '#C4C4C4',
    lineHeight: 16
  },
  labelDescTitle: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    marginTop: 18,
    letterSpacing: 0.307692,
    marginBottom: -10 //verificar
  },
  labelDesc: { fontSize: 12, lineHeight: 19, color: '#777' },
  detailsContainer: {},
  readMoreContainer: {
    marginBottom: 14,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'stretch'
  },
  labelReadMore: {
    color: '#A43287',
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '500'
  }
})
