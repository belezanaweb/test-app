import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Wrapper,
  ProductContainer,
  ProductImageWrapper,
  ProductDescriptionWrapper,
  ProductImage,
  ContainerPrices,
  ContainerList,
} from './Main.style';

import MainTitle from '../../Components/Texts/MainTitle/MainTitle';
import TextDefault from '../../Components/Texts/TextDefault/TextDefault';
import ButtonPrimary from '../../Components/Buttons/ButtonPrimary/ButtonPrimary';
import { getProducts } from '../../Services/Products';
import { toBrazilianReal, showToast } from '../../Utils/Functions';
import FullLoader from '../../Components/FullLoader/FullLoader';

import { Creators as MainActions } from '../../Store/Ducks/main';

class Main extends Component {
  state = {
    currentItems: 0,
    products: [],
    isLoading: true,
  }
  navigate;

  constructor(props) {
    super(props);
    const { navigation } = this.props;

    this.navigate = navigation;
  }

  componentDidMount() {
    this.loadMoreItems();
  }

  loadMoreItems = () => {
    const { currentItems } = this.state;
    const newItemsSize = currentItems + 10;

    this.setState({
      currentItems: newItemsSize,
      isLoading: true,
    });

    console.tron.log('newItemsSize', newItemsSize)

    getProducts(newItemsSize)
      .then((res) => {
        this.setState({
          products: res,
          isLoading: false,
        });
      })
      .catch((error) => {
        showToast('Ocorreu um erro inesperado. Tente novamente mais tarde.');
        this.setState({
          isLoading: false,
        });
      });
  }

  goToProductPage = (item) => {
    const { setCurrentItem } = this.props;

    setCurrentItem(item);

    this.navigate.push('Item');
  }

  renderProductItem = (item) => {
    return (
      <ProductContainer>
        <ProductImageWrapper>
          <ProductImage
            source={{uri: item.imageObjects[0].medium}}
          />
          <TextDefault
            text={`cód: ${item.sku}`}
            color={Colors.grey}
            fontSize={14} />
        </ProductImageWrapper>
        <ProductDescriptionWrapper>
          <TextDefault
            text={item.name}
            color={'#434343'}
            fontSize={16}
            letterSpacing={-0.8} />

          <ContainerPrices>
            {
              item.priceSpecification.maxPrice > item.priceSpecification.price && (
                <TextDefault
                text={`R$ ${toBrazilianReal(item.priceSpecification.maxPrice)}`}
                color={Colors.grey}
                fontSize={14}
                striked={true} />
              )
            }

            <TextDefault
              text={`R$ ${toBrazilianReal(item.priceSpecification.price)}`}
              color={Colors.primary}
              fontSize={18} />
          </ContainerPrices>

          <ButtonPrimary
            onPress={() => this.goToProductPage(item)}
            title={'VER DETALHES'} />
        </ProductDescriptionWrapper>
      </ProductContainer>
    )
  }

  render() {
    const { products, isLoading } = this.state;

    return (
      <>
        <Wrapper>
          <MainTitle
            text={'LISTA DE PRODUTOS'}
            color={Colors.black}
            fontSize={20}
            fontWeight={'bold'} />

          <ContainerList>
            <FlatList
              data={products}
              renderItem={({ item }) => (
                this.renderProductItem(item)
              )}
            />

            { !isLoading && (
              <ButtonPrimary
              onPress={() => this.loadMoreItems()}
              title={'Carregar mais 10 produtos'} />
            )}

          </ContainerList>


        </Wrapper>

        {
          isLoading && <FullLoader />
        }

      </>
    )
  }
}

const mapStateToProps = state => ({
  setCurrentItem: state.main.setCurrentItem,
  currentItem: state.main.currentItem,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MainActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Main);
