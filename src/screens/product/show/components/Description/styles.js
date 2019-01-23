import EStyleSheet from 'react-native-extended-stylesheet';

const styles = options =>
  EStyleSheet.create({
    container: {
      // marginTop: 20,
      paddingBottom: options.hidden ? 20 : 0
    },
    hiddenArea: {
      height: options.hidden ? options.size || 100 : 'auto',
      overflow: options.hidden ? 'hidden' : 'visible',
      margin: 0,
      padding: 0
    },
    containerButton: {
      flexDirection: 'row',
      backgroundColor: options.hidden ? 'rgba(255,255,255,0.8)' : '$white',
      position: options.hidden ? 'absolute' : 'relative',
      left: 0,
      right: 0,
      bottom: options.hidden ? -5 : 0,
      paddingTop: 15
    },
    button: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderTopColor: '$lightGray',
      paddingTop: 5
    },
    buttonText: {
      color: '$purple',
      fontSize: 13,
      fontWeight: '500'
    },
    buttonIcon: {
      color: '$purple'
    },
    title: {
      fontWeight: '500',
      fontSize: 16,
      color: '$dark',
      marginTop: 15
      // bottom:-20
    },
    text: {
      fontSize: 12,
      color: '$lightDark',
      lineHeight: 19,
      padding: 0,
      margin: 0
    }
  });

export default styles;
