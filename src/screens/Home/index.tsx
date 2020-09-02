import React, { useState, useEffect } from 'react'
import { BackHandler, Text, FlatList } from 'react-native'

import { BoxSafe, Box } from '../../atomic/atoms/Spaces'

import Header from '../../atomic/atoms/Header'
import Loading from '../../atomic/atoms/Loading'
import colors from '../../atomic/constants/colors'
import { connect } from 'react-redux'
import * as appAction from '../../redux/actions/appActions'
import * as productsAction from '../../redux/actions/productsActions'

import { isEmpty } from 'lodash'

import moment from 'moment'

import CardProduct from '../../atomic/molecules/CardProduct'
import Pagination from '../../atomic/molecules/Pagination'

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
    let body = {}

    _getProducts(body)
  }, [])

  //render item
  const renderItem = ({ item }) => {
    const { title, poster_path, backdrop_path, id, release_date, vote_average, vote_count } = item

    return (
      <CardProduct
        navigation={navigation}
        title={title}
        image={poster_path}
        id={id}
        date={release_date}
        vote_average={vote_average}
        vote_count={vote_count}
      />
    )
  }

  //on reach end of flat list
  const onEndFlatList = () => {

    let next = page + 1

    if (next <= total_pages) {
      const { request_token } = dataToken.data

      let body = {
        token: request_token,
        page: next
      }
      setPage(next)

      _getProducts(body)
    }
  }

  return (
    <>
      <Header backButton={false} title="LISTA DE PRODUTOS" navigation={navigation} />
      <BoxSafe>
        {/* <Box pr={8} pl={8} pt={8} bg={darkMode ? '' : colors.white}>
          {dataProducts.isLoading ? (
            <Loading name={'spinner'} size={30} color={colors.gold}></Loading>
          ) : (
            <>
              <FlatList
                data={dataProducts.data.results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                onEndReached={() => onEndFlatList()}
                onEndReachedThreshold={0.01}
                numColumns={2}
              />
            </>
          )}
        </Box> */}
      </BoxSafe>
    </>
  )
}

const mapStateToProps = state => ({
  darkMode: state.appReducer.darkMode
})

const mapDispatchToProps = dispatch => {
  return {
    _getProducts: data => {
      //dispatch(productsAction.ProductsRequest(data));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
