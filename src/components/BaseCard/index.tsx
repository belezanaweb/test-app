import React from 'react'
import { CardContainer } from './styles'

const BaseCard: React.FC = ({ children }) => {
  return <CardContainer>{children}</CardContainer>
}

export default BaseCard
