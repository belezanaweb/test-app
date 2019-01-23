import EStyleSheet from 'react-native-extended-stylesheet';
import { StatusBar } from 'react-native';
const styles = EStyleSheet.create({
  wrap: {
    flex: 1
  },
  container: {
    justifyContent: 'space-between',
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '$white'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  content: {
    flex: 1,
    paddingHorizontal: 20
  },
  footer: {},
  textTitle: {
    fontSize: 14,
    color: '$dark',
    fontWeight: 'bold'
  },
  textFooter: {
    fontSize: 12,
    color: '$dark',
    fontWeight: 'bold'
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    padding: 10
  },
  closeButtonText: {
    color: '$white',
    fontSize: 12,
    fontWeight: 'bold',
    padding: 5,
    backgroundColor: '$primary',
    borderRadius: 5
  },
  textInput: {
    borderRadius: 4,
    borderColor: '$gray',
    borderWidth: 1,
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 14,
    fontWeight: 'bold',
    color: '$dark'
  },
  formControl: {
    paddingVertical: 5,
    flexDirection: 'row'
  },
  containerButtonModal: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '100%'
    // flex: 1,
    // padding:10
  }
});

export default styles;
