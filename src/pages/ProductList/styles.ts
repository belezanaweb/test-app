import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'
import { fonts, colors } from '../../components/variables'
export const Container = styled.View``

export const ContainerItem = styled.View`
  padding: ${fonts['smallest']} ${fonts['smallest']} 0;
`

export const ContainerFirstLoading = styled.View`
  flex: 1;
  background: ${colors.primary};
  align-items: center;
  justify-content: center;
`

export const Loading = styled(ActivityIndicator)`
  flex: 1;
`
export const LoadingNext = styled(Loading).attrs({
  color: colors.primary,
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`

export const ContainerButton = styled.View`
  padding: ${fonts['smallest']};
`
