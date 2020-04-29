import axios from 'axios'

const baseUrl = 'https://pacific-wave-51314.herokuapp.com/'

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: {
    'content-type': 'application/json'
  },
})

export default instance
