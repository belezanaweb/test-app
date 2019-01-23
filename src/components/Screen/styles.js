import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';
export default EStyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '$white',
    // marginTop: statusBarTranslucent ? StatusBar.currentHeight : 0

    '@media android': {
      paddingTop: StatusBar.currentHeight + 5,
    },
    '@media ios': {
      paddingTop: 5,
    }
  },
  content: {
    backgroundColor: '$lightGray',
    flex: 1
  }
});
