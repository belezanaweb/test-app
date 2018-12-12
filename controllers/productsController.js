const products = require('../mockData/products.json')

const productsController = {
  list(request, response, next) {
    const { page, size } = request.query || {}

    const _page = Number(page)
    const _size = Number(size)

    if (!_page || !_size || _page < 1 || _size < 1) {
      let error = new Error('Invalid query')
      error.status = 400
      return next(error)
    }

    const start = (_page - 1) * _size
    const end = start + _size

    const reqProducts = products.slice(start, end)

    if(!reqProducts || !reqProducts.length) {
      let error = new Error('')
      error.status = 204
      next(error)
    } else {
      response.status(200).send(reqProducts)
    }
  },

  bySku(request, response, next) {
    const { sku } = request.params || {}

    const reqProduct = products.find(prd => prd.sku === String(sku))

    if(!reqProduct) {
      let error = new Error('Invalid sku')
      error.status = 400
      next(error)
    } else {
      response.status(200).send(reqProduct)
    }
  }
}

module.exports = productsController
