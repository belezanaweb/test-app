export default function currencyFormat(value: number) {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
