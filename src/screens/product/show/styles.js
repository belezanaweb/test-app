import EStyleSheet from 'react-native-extended-stylesheet';
const imageSize = 163;
export default EStyleSheet.create({
  wrapProduct: {
    flex: 1,
    paddingHorizontal: 10
  },
  containerScroll: {
    // flex: 1,
    backgroundColor: 'blue'
  },
  containerProduct: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    overflow: 'hidden'
    // backgroundColor: 'red',
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
    resizeMode: 'cover',
    marginVertical: 15
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    color: '$dark',
    lineHeight: 20
  },
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
  },
  cod: {
    marginTop: 10,
    color: '$gray',
    fontSize: 14
  },
  containerActionButton: {
    flexDirection: 'row'
  },

  containerPriceAndBrand: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    alignItems: 'center'
  },
  containerPriceAndBrandLeft: {
    flex: 1,
    alignItems: 'flex-start'
  },
  containerPriceAndBrandRight: {
    flex: 1,
    alignItems: 'flex-end'
  }
});
