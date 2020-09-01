/**
 * @format
 */

import { StyleSheet } from 'react-native'

import { Dimensions } from 'react-native'
import { Colors } from '../../Theme/colors'

const { height } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    marginTop: 10
  },
  wrapperPopup: {
    backgroundColor: Colors.WHITE,
    width: '90%',
    borderRadius: 10,
    borderColor: Colors.LIGHT_GRAY,
    borderWidth: 2,
    paddingBottom: 20,
    position: 'relative'
  },
  bodyPopup: {
    //flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  header: {
    padding: 18,
    textTransform: 'uppercase',
    textAlign: 'center',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    fontSize: 20,
    color: Colors.PRIMARY_COLOR
  },
  imageDetail: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  viewImage: {
    height: height <= 600 ? '95%' : '99%'
  }
})
