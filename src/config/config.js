import axios from 'axios'

const headers = {
  'Content-Type': 'application/json;charset=utf-8'
}

const api = axios.create({
  baseURL: 'https://pacific-wave-51314.herokuapp.com/',
  timeout: 30000,
  headers
})

export default api