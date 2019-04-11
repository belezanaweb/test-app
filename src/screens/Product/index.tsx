import React from 'react'
import { connect } from 'react-redux'
import { Platform } from 'react-native'
import { Container } from 'components'

import styled from 'theme'
import { IActionCreators, IConnectedProps } from '../Products/types'
import { IAppState } from '../../store/types'
import { bindActionCreators } from 'redux'
import { ProductsLoad, ProductsPaginate } from '../../store/product/actions'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
})

interface IProps {
}

const mapStateToProps: MapStateToProps<IConnectedProps, IProps, IAppState> = state => ({
  loading: state.product.loading,
  data: state.product.products,
  refreshing: state.product.refreshing,
})

const mapDispatchToProps: MapDispatchToProps<IActionCreators, IProps> = dispatch =>
  bindActionCreators(
    {
      ProductsLoad,
      ProductsPaginate,
    },
    dispatch
  )

class Products extends React.Component<IProps, {}> {
  static navigationOptions = {
    title: 'DETALHES DO PRODUTO',
  }

  render(): JSX.Element {
    return (
      <Container>
        <Title>Produtos</Title>
        <Text>To get started, edit App.js</Text>
        <Text>{instructions}</Text>
      </Container>
    )
  }
}

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.primary};
`

const Text = styled.Text`
  color: ${props => props.theme.primaryText};
`

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products)
