const formatCurrency = value => {
  value = parseFloat(value)
  value = value.toFixed(2).split('.')
  value[0] = 'R$ ' + value[0].split(/(?=(?:...)*$)/).join('.')
  return value.join(',')
}

export default formatCurrency
