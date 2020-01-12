import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Button(props) {
  const { children, primary, secondary } = props
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={primary && !secondary ? styles.container : styles.containerSecondary}
    >
      <Text style={primary && !secondary ? styles.buttonLabel : styles.buttonLabelSecondary}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  onPress: () => {},
  children: 'BUTTON',
  primary: true,
  secondary: false
}

const styles = StyleSheet.create({
  container: {
    height: 36,
    backgroundColor: '#FF6C00',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerSecondary: {
    height: 36,
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#FF6C00',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
    color: '#FFF'
  },
  buttonLabelSecondary: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
    color: '#FF6C00'
  }
})
