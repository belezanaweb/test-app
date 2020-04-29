import currency from 'currency.js'

const sanitizePrice = price => {
  return currency(price, {
    symbol: 'R$ ',
    formatWithSymbol: true,
    decimal: ',',
    separator: '.',
  }).format()
}

export default sanitizePrice
