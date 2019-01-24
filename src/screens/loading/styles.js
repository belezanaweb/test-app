import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$white'
  },
  logo: {
    // width: 250,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 80,
    marginBottom: 80
  }
});
