import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  price: {
    fontSize: 24,
    color: '$primary',
    fontWeight: 'bold'
  },
  maxPrice: {
    color: '$gray',
    fontSize: 14,
    textDecorationLine: 'line-through'
  },
  installments: {
    color: '$lightDark',
    fontSize: 16
  }
});
