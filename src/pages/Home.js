/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Alert } from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'
import axios from 'axios'

import Button from '../components/Button'
import Typography from '../components/Typography'
import Container from '../components/Container'
import ListProduct from '../components/ListProduct/index'
import Loading from '../components/Loading'

import COLORS from '../constants/COLORS'

export default props => {
  const [loading, setloading] = React.useState(true)
  const [pagination, setpagination] = React.useState({ page: 1, size: 3 })
  const [datalist, setdatalist] = React.useState([])

  React.useEffect(() => {
    loadMore()

    return () => {
      //cleanup
    }
  }, [pagination])

  const loadMore = async () => {
    setloading(true)

    axios
      .get(
        `https://pacific-wave-51314.herokuapp.com/products?page=${pagination.page}&size=${pagination.size}`
      )
      .then(result => {
        if (result.status === 200) {
          return result
        } else {
          setpagination({ page: 1, size: 3 }, () => loadMore())
        }
      })
      .then(
        result =>
          result.data &&
          result.data.map(product => ({
            code: product.sku,
            name: product.name,
            price: parseFloat(product.priceSpecification.price).toFixed(2),
            maxPrice: parseFloat(product.priceSpecification.maxPrice).toFixed(2),
            image: product.imageObjects.filter(image => image.featured)[0],
            product
          }))
      )
      .then(d => {
        setdatalist(d)
        setloading(false)
      })
      .catch(err => {
        setpagination(() => ({ page: 1, size: 3 }))
        setloading(false)
      })
  }

  return (
    <SafeAreaView>
      <Container fullscreen spacebetween backgroundcolor={COLORS.GRAY_LIGHT}>
        <Typography bold uppercase title>
          Lista de produtos
        </Typography>
        {loading ? <Loading /> : <ListProduct navigation={props.navigation} data={datalist} />}

        <Button
          rounded
          primary
          uppercase
          title="Carregar mais produtos"
          onPress={() => setpagination({ ...pagination, page: pagination.page + 1 })}
        />
      </Container>
    </SafeAreaView>
  )
}
