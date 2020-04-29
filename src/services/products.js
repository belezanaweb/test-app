import Api from './api.js'

export const getAllProducts = async (page = 1, size = 10) => {
  try {
    const res = await Api.get('/products', {
      params: {
        page,
        size,
      },
    })
    return res.data
  } catch (err) {
    return {}
  }
}

export const getProductBySku = async sku => {
  const res = await Api.get(`/products/${sku}`)
  console.log(res)
  return res.data
}
