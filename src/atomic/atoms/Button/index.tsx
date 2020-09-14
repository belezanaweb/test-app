import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import * as appAction from '../../../redux/actions/appActions'

import colors from '../../constants/colors'

import { TextRegular } from '../../atoms/Titles'
import { TouchableButton } from '../../atoms/Spaces'
import Icons from '../../atoms/Icons'

function Button({ navigation, title, onPress, bg, textColor }) {
  const showDarkModeButton = false

  return (
    <>
      <TouchableButton
        onPress={onPress}
        pt={10}
        pb={10}
        bg={bg}
        border={4}
        borderColor={colors.orange}
      >
        <TextRegular weight={'bold'} size={14} color={textColor}>
          {title}
        </TextRegular>
      </TouchableButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(Button)
