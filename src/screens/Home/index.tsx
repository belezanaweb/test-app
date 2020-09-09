import React, { useState, useEffect } from 'react'
import { BackHandler, Text, FlatList } from 'react-native'

import { BoxSafe, Box } from '../../atomic/atoms/Spaces'

import Header from '../../atomic/atoms/Header'
import Loading from '../../atomic/atoms/Loading'
import colors from '../../atomic/constants/colors'
import { connect } from 'react-redux'

import Button from '../../atomic/atoms/Button'

import * as appAction from '../../redux/actions/appActions'
import * as productsAction from '../../redux/actions/productsActions'

import { isEmpty, find } from 'lodash'

import moment from 'moment'

import CardProduct from '../../atomic/molecules/CardProduct'

function Home({ navigation, _getProducts, dataProducts, darkMode }) {
  const [page, setPage] = useState(1)

  //handling with back press
  const backAction = () => {
    Alert.alert('Ops!', 'Deseja fechar o aplicativo?', [
      {
        text: 'Não',
        onPress: () => null,
        style: 'cancel'
      },
      { text: 'Sim', onPress: () => BackHandler.exitApp() }
    ])
    return true
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction)

    return () => BackHandler.removeEventListener('hardwareBackPress', backAction)
  }, [])

  //getting products list
  useEffect(() => {
    let body = {
      page: 1,
      size: 6
    }
    _getProducts(body)
  }, [])

  //render item
  const renderItem = ({ item }) => {
    const { sku, name, releaseDate, priceSpecification } = item

    const image = find(item.imageObjects, function (img) {
      return img.featured === true
    })

    const originalPrice = priceSpecification.originalPrice
    const price = priceSpecification.price

    return (
      <CardProduct
        navigation={navigation}
        title={name}
        image={!isEmpty(image) ? image.imageUrl : ''}
        id={sku}
        date={releaseDate}
        originalPrice={originalPrice}
        price={price}
      />
    )
  }

  function showMoreProducts () {
    let next = page + 1
    setPage(next)

    let body = {
      page: next,
      size: 6
    }

    _getProducts(body)
  }

  return (
    <>
      <Header backButton={false} title="LISTA DE PRODUTOS" navigation={navigation} />
      <BoxSafe>
        <Box flex={1} pl={10} pr={10} pb={10} bg={darkMode ? '' : colors.lightGray}>
          {dataProducts.isLoading ? (
            <Loading name={'spinner'} size={30} color={colors.gold}></Loading>
          ) : (
            <>
              <FlatList
                data={dataProducts.data}
                keyExtractor={item => item.sku.toString()}
                renderItem={renderItem}
                //onEndReached={() => onEndFlatList()}
                onEndReachedThreshold={0.01}
              />
            </>
          )}

          
        </Box>
        
        <Box flex={0.05} pl={10} pr={10} pb={10} bg={darkMode ? '' : colors.lightGray}>
        <Button
            onPress={() => {
              showMoreProducts()
            }}
            bg={'transparent'}
            title={'Carregar mais Produtos'}
            textColor={colors.orange}
          />
          </Box>
      </BoxSafe>
    </>
  )
}

const mapStateToProps = state => ({
  darkMode: state.appReducer.darkMode,
  dataProducts: state.productsReducer
})

const mapDispatchToProps = dispatch => {
  return {
    _getProducts: data => {
      dispatch(productsAction.ProductsRequest(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
