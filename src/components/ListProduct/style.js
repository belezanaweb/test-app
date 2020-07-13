import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native'

import styled, { css } from 'styled-components/native'

const cardHeidth = Dimensions.get('screen').height / 3

import COLORS from '../../constants/COLORS'

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 10px;
`
export const Title = styled.Text`
  text-align: center;
  font-size: ${p => p.fontsize || '20'}px;
  color: ${p => p.color || COLORS.BLACK};
  ${p =>
    p.bold &&
    css`
      font-weight: bold;
    `}

  ${p =>
    p.uppercase &&
    css`
      text-transform: uppercase;
    `}
`

export const CardSide = styled(View)`
  flex: 1;
`

export const CardSeprator = styled.View`
  padding: 5px;
`

export const CardLeft = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  width: 50%;
`
export const CardRight = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
`

export const TitleProduct = styled.Text`
  flex-grow: 1;
  text-align: left;
  font-size: 10px;
`

export const PriceMaxProduct = styled.Text`
  font-size: 10px;
  color: ${COLORS.GRAY_LIGHT};
  text-align: left;
  text-decoration: line-through;
`
export const PriceProduct = styled.Text`
  flex-grow: 1;
  font-size: ${p => p.fontsize || '15'}px;
  color: ${COLORS.ORANGE};
  text-align: left;
  font-weight: bold;
`
export const TextLabel = styled(PriceMaxProduct)`
  text-align: center;
  text-decoration: none;
`

export const ContainerButtons = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
`
export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
