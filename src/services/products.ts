import api from './api'
import { PRODUCT_API } from './../utils/constants'

export const getProducts = async (page = 1, size = 3) => {
  const res = await api.get(`${PRODUCT_API}`, {
    params: {
      page,
      size
    }
  })

  return res.data
}

export const getProduct = async (sku: string) => {
  return (await api.get(`${PRODUCT_API}/${sku}`)).data
}
