import React from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { IActionCreators, IConnectedProps, IProps, IState } from './types'
import { bindActionCreators } from 'redux'
import { ProductLoad } from 'store/product/actions'
import { IAppState } from 'store/types'
import { Container, ModalAlert, ModalCart, Product } from 'components'
import { Loading } from '../../components/Loading'

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
    dispatch,
  )

class ProductScreen extends React.Component<IProps, IState> {
  static navigationOptions = {
    title: 'DETALHES DO PRODUTO',
  }

  state = {
    modal: false,
  }

  componentDidMount(): void {
    const { navigation, ProductLoad, product } = this.props
    const sku = navigation.getParam('sku')
    if (!product || product.sku !== sku) ProductLoad(sku)
  }

  onPress = () => {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    const { product } = this.props
    const { modal } = this.state
    return (
      <Container>

        {
          product && product.inventory.quantity
            ? <ModalCart visible={modal} product={product} onPress={() => this.onPress()}/>
            : <ModalAlert visible={modal} product={product} onPress={() => this.onPress()}/>
        }

        {!product
          ? <Loading/>
          : <Product item={product} onPress={() => this.onPress()}/>}

      </Container>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductScreen)
