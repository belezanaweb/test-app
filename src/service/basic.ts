import api from './api'

export const listProducts = async (pageNumber: number) => {
  return api.get(`/products?page=${pageNumber}&size=${pageNumber}`)
}
