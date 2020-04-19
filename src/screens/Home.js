import React, { useState, useEffect } from 'react'

import { List } from '../components'
import data from '../products.json'

const Home = props => {
  return <List data={data} {...props} />
}

export default Home
