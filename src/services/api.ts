import axios from 'axios'
import { BASE_URL } from './../utils/constants'

const api = axios.create({
  baseURL: BASE_URL
})

export default api
