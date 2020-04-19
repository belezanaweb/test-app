import React from 'react'

import { TextStyled } from './styles.js'

const Text = props => {
  return <TextStyled {...props}>{props.children}</TextStyled>
}

export default Text
