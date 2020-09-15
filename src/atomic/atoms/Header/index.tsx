import React, { useState, useEffect } from 'react'
import { View, Platform, StatusBar, Switch } from 'react-native'

import { connect } from 'react-redux'
import * as appAction from '../../../redux/actions/appActions'

import { useNetInfo } from '@react-native-community/netinfo'

import colors from '../../constants/colors'

import { TextRegular } from '../../atoms/Titles'
import Icons from '../../atoms/Icons'

import { BackButton, SnackBar } from './styles'

function Header({ navigation, title, backButton, _setDarkMode, darkMode }) {
  //handling with net
  const netInfo = useNetInfo()

  const toggleSwitch = () => {
    //setDarkMode((previousState) => !previousState);
    _setDarkMode(!darkMode)
  }

  const showDarkModeButton = false

  return (
    <>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />

      {!netInfo.isConnected && (
        <SnackBar>
          <TextRegular size={12}>
            <Icons name="wifi" size={12} />
            &nbsp;No internet connection available
          </TextRegular>
        </SnackBar>
      )}

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: darkMode ? colors.graffit : colors.lightGray,
          padding: 20,
          paddingTop: Platform.OS === 'ios' ? 50 : 20,
          justifyContent: 'center',
          position: 'relative'
        }}
      >
        {backButton && (
          <BackButton
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Icons name="chevron-left" size={18} color={darkMode ? colors.orange : colors.black} />
          </BackButton>
        )}

        <TextRegular weight={'bold'} size={14} align={'center'} color={darkMode ? colors.orange : colors.black}>
          {title}
        </TextRegular>

        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            bottom: 17,
            right: 20
          }}
        >
          {showDarkModeButton && (
            <Switch
              trackColor={{ false: colors.gray, true: colors.gray }}
              thumbColor={darkMode ? colors.orange : colors.white}
              ios_backgroundColor={colors.gray}
              onValueChange={toggleSwitch}
              value={darkMode}
            />
          )}
        </View>
      </View>
    </>
  )
}

const mapStateToProps = state => ({
  darkMode: state.appReducer.darkMode
})

const mapDispatchToProps = dispatch => {
  return {
    _setDarkMode: bool => {
      dispatch(appAction.AppSetDarkMode(bool))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
