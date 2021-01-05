import React from 'react'
import { Input } from './NewsLetterForm.styles'
const NewsLetterForm = () => {
  return (
    <>
      <Input autoFocus placeholder="Seu nome" />
      <Input autoCapitalize="none" keyboardType="email-address" placeholder="Seu email" />
    </>
  )
}

export default NewsLetterForm
