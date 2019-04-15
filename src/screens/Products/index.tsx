import React from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FlatList } from 'react-native'

import { Button, ButtonText, Container, Loading, ProductListItem } from 'components'
import { IActionCreators, IConnectedProps, IProps, IState } from './types'
import { IAppState } from 'store/types'
import { ProductsLoad, ProductsPaginate } from 'store/product/actions'
import { ThemeSwitch } from 'store/app/actions'

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
      ThemeSwitch,
    },
    dispatch,
  )

class Products extends React.Component<IProps, IState> {
  static navigationOptions = ({ screenProps }) => ({
    title: 'LISTA DE PRODUTOS',
    headerStyle: {
      backgroundColor: screenProps.theme.backgroundPrimary,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: screenProps.theme.black,
    },
    headerTintColor: screenProps.theme.black,
    animationEnabled: true
  })

  componentDidMount(): void {
    const { data, ProductsPaginate } = this.props
    if (!data.length) ProductsPaginate()
  }

  render() {
    const { data, loading, refreshing, ProductsLoad, ProductsPaginate, ThemeSwitch } = this.props
    return (
      <Container>
        <Button
          border
          margin
          onPress={() => ThemeSwitch()}>
          <ButtonText primary={true}>TROCAR TEMA</ButtonText>
        </Button>

        <FlatList
          data={data}
          initialNumToRender={5}
          legacyImplementation={true}
          renderItem={({ item }) => (
            <ProductListItem
              item={item}
              border={true}
              onPress={sku => this.props.navigation.navigate('Product', { sku })}
            />
          )}
          keyExtractor={i => i.sku}
          // onRefresh={() => ProductsLoad()}
          // refreshing={refreshing}
          // onEndReached={() => !loading && ProductsPaginate()}
          // onEndReachedThreshold={0.1}
          ListFooterComponent={loading && <Loading/>}
        />

        <Button
          border
          margin
          onPress={() => ProductsPaginate()}>
          <ButtonText primary={true}>CARREGAR MAIS</ButtonText>
        </Button>
      </Container>
    )
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products)
