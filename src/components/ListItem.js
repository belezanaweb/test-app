import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Button from './Button'
import { DETAILS, CURRENCY } from '../constants/strings'

export default function ListItem(props) {
  const { name, priceSpecification, sku, imageObjects, onPress } = props
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

  function returnFeaturedImageUri(imageObjects) {
    let uri = ''
    imageObjects.map(image => {
      image.featured === true && (uri = image)
    })
    return uri ? uri.medium : ''
  }
  const uri = returnFeaturedImageUri(imageObjects)

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri }} style={styles.image} />
        <Text style={styles.labelCod}>{`cod: ${sku}`}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text>{name}</Text>
        <View>
          {priceSpecification.maxPrice !== priceSpecification.price && (
            <Text style={styles.labelOldPrice}>{`${CURRENCY} ${priceFormatter(
              priceSpecification.maxPrice
            )}`}</Text>
          )}
          <Text style={styles.labelPrice}>{`${CURRENCY} ${priceFormatter(
            priceSpecification.price
          )}`}</Text>
        </View>

        <Button onPress={onPress}>{DETAILS}</Button>
      </View>
    </View>
  )
}
ListItem.defaultProps = {
  name: 'ListItem',
  priceSpecification: {
    sku: '54417',
    price: 549,
    originalPrice: 549,
    maxPrice: 549,
    percent: 0,
    discount: 0,
    installments: {
      numberOfPayments: 10,
      monthlyPayment: 54.9
    }
  },
  onPress: () => {}
}

const styles = StyleSheet.create({
  container: {
    // verificar
    padding: 5,
    height: 145,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    backgroundColor: '#FFF'
  },
  imageContainer: { justifyContent: 'space-between', alignItems: 'center' },
  image: { height: 100, width: 100 },
  labelCod: {
    alignSelf: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#C4C4C4',
    lineHeight: 14
  },
  detailContainer: { flex: 2, justifyContent: 'space-between', marginLeft: 9 },
  nameLambe: { fontWeight: 'normal', fontSize: 12, lineHeight: 16, color: '#212121' },
  labelPrice: {
    fontWeight: 'bold',
    lineHeight: 16,
    fontSize: 14,
    color: '#FF6C00'
  },
  labelOldPrice: {
    lineHeight: 13,
    fontSize: 12,
    color: '#999',
    textDecorationLine: 'line-through',
    textDecorationColor: '#999'
  }
})
