import EStyleSheet from 'react-native-extended-stylesheet';
export default EStyleSheet.create({
  container: {
    backgroundColor: '$lightGray',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    paddingTop: 10,
    flexDirection: 'row'
  },
  safeArea: {
    backgroundColor: '$lightGray'
  },
  title: {
    color: '$dark',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center'
  },

  containerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 5
  },
  containerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
});
