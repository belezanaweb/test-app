import api from './api'

const pageSize = 8

interface ProductState {
  imageObjects: any
}

export const listProducts = async (pageNumber: number) => {
  const { data } = await api.get(
    `/products?page=${pageNumber}&size=${pageSize}`,
  )

  const normalize = data.map(normalizeProduct)

  return { data: normalize }
}

export const filterProduct = async (sku: string) => {
  const { data } = await api.get(`/products/${sku}`)

  const normalize = normalizeProduct(data)

  return { data: normalize }
}

const normalizeProduct = (product: ProductState) => {
  return {
    ...product,
    image: product.imageObjects.find((img: any) => img.featured),
  }
}
