import EStyleSheet from 'react-native-extended-stylesheet';
const styles = EStyleSheet.create({
  wrap: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '$blackBlur'
  },
  container: {
    backgroundColor: '$white',
    shadowColor: '$dark',
    borderRadius: 5,
    shadowOffset: {
      width: 2,
      height: 3
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 1,
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 10,
    padding: 5,
    paddingHorizontal: 20
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  textTitle: {
    fontSize: 14,
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
    paddingVertical: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '$dark'
  },
  formControl: {
    paddingVertical: 5,
    flexDirection: 'row'
  }
});

export default styles;
