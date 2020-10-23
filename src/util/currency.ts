export const formatCurrencyReal = (number: any) => {
  number = Number(number).toFixed(2).split('.')
  number[0] = 'R$ ' + number[0].split(/(?=(?:...)*$)/).join('.')
  return number.join(',')
}
