import React from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Container, Product } from 'components'
import { IActionCreators, IConnectedProps, IProps } from './types'
import { bindActionCreators } from 'redux'
import { ProductLoad } from 'store/product/actions'
import { IAppState } from 'store/types'

const mapStateToProps: MapStateToProps<IConnectedProps, IProps, IAppState> = state => ({
  loading: state.product.loading,
  product: state.product.product,
  refreshing: state.product.refreshing,
})

const mapDispatchToProps: MapDispatchToProps<IActionCreators, IProps> = dispatch =>
  bindActionCreators(
    {
      ProductLoad,
    },
    dispatch
  )

class ProductScreen extends React.Component<IProps, {}> {
  static navigationOptions = {
    title: 'DETALHES DO PRODUTO',
  }

  componentDidMount(): void {
    const { navigation, ProductLoad, product } = this.props
    const sku = navigation.getParam('sku')
    if (!product || product.sku !== sku) ProductLoad(sku)
  }

  render() {
    const { product } = this.props
    return (
      <Container>
        <Product item={product} onPress={null} />
      </Container>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductScreen)
