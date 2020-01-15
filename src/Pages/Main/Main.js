import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';

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

class Main extends Component {
  state = {
    currentItems: 0,
    products: [],
    isLoading: true,
  }

  constructor(props) {
    super(props);

    this.loadMoreItems();
  }

  loadMoreItems = () => {
    const { currentItems } = this.state;
    const newItemsSize = currentItems + 10;

    this.setState({
      currentItems: newItemsSize,
      isLoading: true,
    });

    getProducts(newItemsSize)
      .then((res) => {
        this.setState({
          products: res,
          isLoading: false,
        });
        console.tron.log('res', res);
      })
      .catch((error) => {
        console.tron.log('error', error);
        showToast('Ocorreu um erro inesperado. Tente novamente mais tarde.');
        this.setState({
          isLoading: false,
        });
      });
  }

  renderProductItem = (item) => {
    return (
      <ProductContainer>
        <ProductImageWrapper>
          <ProductImage
            source={{uri: item.imageObjects[0].medium}}
          />
          <TextDefault
            text={`cod: ${item.sku}`}
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
            onPress={() => {}}
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

            <ButtonPrimary
              onPress={() => this.loadMoreItems()}
              title={'Carregar mais 10 produtos'} />
          </ContainerList>


        </Wrapper>

        {
          isLoading && <FullLoader />
        }

      </>
    )
  }
}

export default Main;
