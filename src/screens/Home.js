import React, { useState, useEffect } from 'react'

import { List } from '../components'
import { getAllProducts } from '../services/products'

const Home = props => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts()
      .then(newProducts => {
        setProducts(newProducts)
      })
      .catch(err => {
        console.log('Não foi possivel carregar os dados', err)
      })
  }, [])

  return <List data={products} {...props} />
}

export default Home
