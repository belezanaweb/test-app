import React from 'react'

import { List } from '../components'
import data from '../products.json'

const Home = () => {
  return <List data={data} />
}

export default Home
