import EStyleSheet from 'react-native-extended-stylesheet';
const imageSize = 108;

export default EStyleSheet.create({
  containerProduct: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerLeft: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  containerRight: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  contentBox: {
    flex: 1,
    justifyContent: 'space-between'
  },
  image: {
    width: imageSize,
    height: imageSize,
    resizeMode: 'cover'
  },
  name: {
    fontSize: 12,
    color: '$dark'
  },
  price: {
    fontSize: 14,
    color: '$primary',
    fontWeight: 'bold'
  },
  maxPrice: {
    color: '$gray',
    fontSize: 12,
    textDecorationLine: 'line-through'
  },
  cod: {
    marginTop: 10,
    color: '$gray',
    fontSize: 12
  },
  button: {
    flexDirection: 'row'
  }
});
