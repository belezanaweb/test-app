import EStyleSheet from 'react-native-extended-stylesheet';
const imageSize = 163;
export default EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '$white',
    shadowColor: '$gray',
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 10,
    padding: 10
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
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15
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
  button: {
    flexDirection: 'row'
  },

  containerMiddle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    alignItems: 'center'
  },
  containerMiddleLeft: {
    flex: 1,
    alignItems: 'flex-start'
  },
  containerMiddleRight: {
    flex: 1,
    alignItems: 'flex-end'
  },
  description: {
    // height: 'auto'
    // overflow: 'hidden'
  }
});
