import React from 'react'
import styled from 'styled-components'

const NewsLetterForm = () => {
  return (
    <>
      <Input autoFocus placeholder="Seu nome" />
      <Input autoCapitalize="none" keyboardType="email-address" placeholder="Seu email" />
    </>
  )
}

const Input = styled.TextInput`
  margin-top: 8px;
  padding: 4px;
  height: 32px;
  border-color: #ccc;
  border-width: 1px;
`

export default NewsLetterForm
