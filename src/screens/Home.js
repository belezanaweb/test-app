import React, { useState, useEffect } from 'react'

import { List, Button, Loading } from '../components'
import { getAllProducts } from '../services/products'

const sizePagination = 10

const Home = props => {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [sizeList, setSizeList] = useState(sizePagination)
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAllProducts(page, sizeList)
      .then(newProducts => {
        setSizeList(newProducts.length)
        setPage(page + 1)
        setLoading(false)
        setProducts(newProducts)
      })
      .catch(err => {
        console.log('Não foi possivel carregar os dados', err)
      })
  }, [page, sizeList])

  const renderFooter = () => {
    if (loadingMore) {
      return <Loading>Carregando mais...</Loading>
    }
    if (sizeList === sizePagination) {
      return (
        <Button
          secundary
          onPress={() => {
            setLoadingMore(true)
            getAllProducts(page)
              .then(newProducts => {
                setSizeList(newProducts.length)
                setPage(page + 1)
                setProducts([...products, ...newProducts])
                setLoadingMore(false)
              })
              .catch(err => {
                console.log('Não foi possivel carregar mais dados', err)
              })
          }}
        >
          Carregar mais produtos
        </Button>
      )
    }
    return null
  }

  if (loading) {
    return <Loading>Carregando...</Loading>
  }

  return <List data={products} ListFooterComponent={renderFooter} extraData={products} {...props} />
}

export default Home
