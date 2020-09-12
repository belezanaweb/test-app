import React from 'react'

import * as S from './styles'
import { WithChildren } from './../../utils/helper/WithChildren'

const Text = ({ children, ...props }: WithChildren) => <S.Text {...props}>{children}</S.Text>

export default Text
