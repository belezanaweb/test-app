import React, { useState, useEffect } from 'react'
import { InputText } from './styles'
import colors from '../../constants/colors'

function Input({ value, placeholder }) {
  return (
    <>
      <InputText
        defaultValue={value}
        placeholder={placeholder}
        pt={10}
        pl={15}
        pr={15}
        pb={10}
        mb={15}
        bg={'transparent'}
        border={4}
        borderColor={colors.orange}
      />
    </>
  )
}

export default Input
