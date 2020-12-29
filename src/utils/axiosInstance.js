import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://pacific-wave-51314.herokuapp.com'
})

export default axiosInstance
