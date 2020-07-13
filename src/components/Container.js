import React from 'react'
import { View, Dimensions } from 'react-native'
import styled, { css } from 'styled-components'

import COLORS from '../constants/COLORS'

const ContainerStyled = styled(View)`
  padding: 10px;
  display: flex;
  height: 200px;

${p =>
  p.nopadding &&
  css`
    padding: 0px;
  `}

${p =>
  p.direction &&
  css`
    flex-direction: ${p.direction};
  `}

  ${p =>
    p.backgroundcolor &&
    css`
      background-color: ${p.backgroundcolor || 'transparent'};
    `}

  ${p =>
    p.height &&
    css`
      height: ${p.height};
    `}
  

  ${p =>
    p.heightauto &&
    css`
      height: auto;
    `}


  ${p =>
    p.height100 &&
    css`
      height: 100%;
    `}
  
${p =>
  p.flex1 &&
  css`
    flex: 1;
  `}

${p =>
  p.fullscreen &&
  css`
    height: ${Dimensions.get('window').height}px;
  `}

  ${p =>
    p.spacebetween &&
    css`
      justify-content: space-between;
    `}

  ${p =>
    p.spacearound &&
    css`
      justify-content: space-around;
    `}

    ${p =>
      p.center &&
      css`
        justify-content: center;
      `}
`

export default props => <ContainerStyled {...props}>{props.children}</ContainerStyled>
