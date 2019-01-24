import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$white',
    shadowColor: '$dark',
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 1,
    marginHorizontal: 3,
    marginTop: 5,
    marginBottom: 10,
    padding: 5
  }
});
