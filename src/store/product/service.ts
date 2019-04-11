export const onPaginate = async (state) => {
  try {
    const resp = await fetch(`https://pacific-wave-51314.herokuapp.com/products?page=${state.value.product.page}&size=${state.value.product.size}`)
    return resp.json()

  } catch (e) {
    return e

  }
}

export const onProduct = async (cod: number) => {

  try {
    const resp = await fetch(`https://pacific-wave-51314.herokuapp.com/products/${cod}`)
    return resp.json()

  } catch (e) {
    return e
  }
}
