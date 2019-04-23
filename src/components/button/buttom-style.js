import { StyleSheet } from 'react-native';
import { orange } from '../../styles/color';

const styleButtonCommon = {
  borderRadius: 4,
  bottom: 0,
  height: 36,
  marginTop: 10,
  position: 'relative',
  right: 0,
  width: '100%',
};
const styleTextCommon = {
  fontSize: 14,
  // fontFamily: "Roboto",
  fontStyle: 'normal',
  fontWeight: 'bold',
  lineHeight: 36,
  // left: 'calc(50% - 173px/2 + 58.5px)',
  textAlign: 'center',
  textTransform: 'uppercase',
};

const styles = StyleSheet.create({
  buttonInvert: {
    ...styleButtonCommon,
    backgroundColor: '#FFFFFF',
    borderColor: orange,
    borderWidth: 2,
  },
  buttonNormal: {
    ...styleButtonCommon,
    backgroundColor: orange,
  },
  textInvert: {
    ...styleTextCommon,
    color: orange,
    lineHeight: 32,
  },
  textNormal: {
    ...styleTextCommon,
    color: '#FFFFFF',
  },
});
export const customButton = bool => (bool ? styles.buttonNormal : styles.buttonInvert);
export const customText = bool => (bool ? styles.textNormal : styles.textInvert);
