import EStyleSheet from 'react-native-extended-stylesheet';
export default options => {
  return EStyleSheet.create({
    container: {
      flex: 1,
      borderRadius: 4,
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginVertical: 0,
      marginHorizontal: 0,
      alignItems: 'center',
      backgroundColor: options.clean ? '$white' : '$primary',
      borderWidth: options.bordered ? 2 : 0,
      borderColor: '$primary'
    },
    disabled: {
      borderWidth: 0,
      backgroundColor: '$white'
    },
    loading: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0,
      backgroundColor: '$white'
    },
    text: {
      fontSize: 14,
      fontWeight: 'bold',
      color: options.clean ? '$primary' : '$white'
    },
    textDisabled: {
      color: '$primary'
    }
  });
};
