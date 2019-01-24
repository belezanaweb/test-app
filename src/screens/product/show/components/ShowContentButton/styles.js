import EStyleSheet from 'react-native-extended-stylesheet';
const styles = options =>
  EStyleSheet.create({
    containerButton: {
      flexDirection: 'row',
      backgroundColor: !options.showContent ? '$whiteBlur' : '$white',
      position: !options.showContent ? 'absolute' : 'relative',
      left: 0,
      right: 0,
      bottom: !options.showContent ? 5 : 0,
      paddingTop: !options.showContent ? 35 : 0,
      paddingHorizontal: 15
    },
    button: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderTopColor: '$lightGray',
      paddingTop: 5,
      backgroundColor: '$white'
    },
    buttonText: {
      color: '$purple',
      fontSize: 13,
      fontWeight: '500'
    },
    buttonIcon: {
      color: '$purple'
    }
  });

export default styles;
