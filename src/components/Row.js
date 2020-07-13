import React from 'react'

import { View } from 'react-native'
import styled, { css } from 'styled-components'

const Row = styled(View)`
  flex: 1;
  width: 100%;

  ${p =>
    p.flex &&
    css`
      flex: ${p.flex};
    `}

  ${p =>
    p.direction &&
    css`
      flex-direction: ${p.direction};
    `}

    ${p =>
      p.justifycontent &&
      css`
        justify-content: ${p.justifycontent};
      `}
`

export default props => (
  <Row {...props}>
    <React.Fragment>{props.children}</React.Fragment>
  </Row>
)
