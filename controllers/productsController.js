const productList = require('../mockData/productList.json')
const products = require('../mockData/products.json')

const productsController = {
  index: (req, res) => {
    const { page, size } = req.query || {}

    const _page = Number(page)
    const _size = Number(size)

    if (!_page || !_size || _page < 1 || _size < 1) {
      return res.status(400).send({ error: 'Invalid query' })
    }

    const start = (_page - 1) * _size
    const end = start + _size

    const reqProducts = productList.slice(start, end)

    return (reqProducts && reqProducts.length)
      ? res.status(200).send(reqProducts)
      : res.status(204).send()
  },

  item: (req, res) => {
    const { sku } = req.params || {}

    const reqProduct = products.find(prd => prd.sku === String(sku))

    return (reqProduct)
      ? res.status(200).send(reqProduct)
      : res.status(400).send({ error: 'Invalid sku' })
  }
}

module.exports = productsController
