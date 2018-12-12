const productList = require('../mockData/productList.json')
const products = require('../mockData/products.json')

const productsController = {
  index: (req, res) => {
    const { page, size } = req.query || {}

    if (!page || !size) {
      return res.status(400).send({ error: 'Invalid query' })
    }

    const start = (page - 1) * size
    const end = start + size

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
