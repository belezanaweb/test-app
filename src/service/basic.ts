import api from './api'

const pageSize = 8

export const listProducts = async (pageNumber: number) => {
  const { data } = await api.get(`/products?page=${pageNumber}&size=${pageSize}`)

  const productsNoramalizeds = data.map(normalizeProduct)

  return { data: productsNoramalizeds }
}

const normalizeProduct = product => {
  return {
    ...product,
    image: product.imageObjects.find(img => img.featured)
  }
}
