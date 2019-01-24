import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';
export default EStyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '$white',
    '@media android': {
      paddingTop: StatusBar.currentHeight + 5
    },
    '@media ios': {
      paddingTop: 5
    }
  },
  safeArea: {
    backgroundColor: '$lightGray'
  },
  content: {
    backgroundColor: '$lightGray',
    flex: 1
  }
});
