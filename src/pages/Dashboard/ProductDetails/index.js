import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Card,
  Scroll,
  ProductHeaderContainer,
  ProductImage,
  ProductName,
  ProductPriceContainer,
  ProductDescriptionContainer,
  ProductBodyContainer,
  OldPrice,
  NewPrice,
  PriceMonthly,
  ProductInfoContainer,
  ProductDescription,
  ProductSku,
  DescriptionTitle,
} from './styles';
import {formatPrice} from '~/util/format';
import * as productsService from '~/services/products';
import fonts from '~/util/fonts';
import Dialog from '~/components/Dialog';
import ShowMore from 'react-native-show-more-button';
import Button from '~/components/Button';
import {Text} from 'react-native';

function ProductDetails({navigation}) {
  const [modalOptions, setModalOptions] = useState({
    visible: false,
    title: ''
  });
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProductInfo = async () => {
      const item = navigation.getParam('product');

      const data = await productsService.getBySku(item.sku);
      setProduct(data);
    };

    loadProductInfo();
  }, []);

  async function handleClick() {
    if (product.inventory.quantity > 0) {
      setModalOptions({
        visible: true,
        title: 'Produto adicionado a sacola',
      });
    } else {
      setModalOptions({
        visible: true,
        title: 'Me avise',
        inputs: [{label: 'Nome'}, {label: 'Email'}],
      });
    }
  }

  return (
    <Container>
      {product && (
        <Card>
          <ProductHeaderContainer>
            <ProductName style={fonts.bold}>{product.name}</ProductName>
            <ProductImage source={{uri: product.featuredImage?.imageUrl}} />
          </ProductHeaderContainer>
          <ProductBodyContainer>
            <ProductPriceContainer>
              {product.oldPrice !== product.newPrice && (
                <OldPrice style={fonts.medium}>{product.oldPrice}</OldPrice>
              )}
              <NewPrice style={fonts.bold}>{product.newPrice}</NewPrice>
              <PriceMonthly>{product.formattedMonthlyPayment}</PriceMonthly>
            </ProductPriceContainer>

            <ProductInfoContainer>
              <ProductName style={fonts.bold}>
                {product.brand?.name}
              </ProductName>
              <ProductSku>{`cod: ${product.sku}`}</ProductSku>
            </ProductInfoContainer>
          </ProductBodyContainer>

          <Button
            inverse={product.inventory?.quantity === 0}
            onPress={handleClick}
            title={product.inventory?.quantity === 0 ? 'me avise' : 'compre'}
          />
          <ShowMore
            height={100}
            buttonColor="#A43287"
            showMoreText="Continuar Lendo"
            showLessText="Fechar">
            <ProductDescriptionContainer
              numberOfLines={4}
              renderRevealedFooter={<Text>Teste</Text>}
              renderTruncatedFooter={<Text>Teste</Text>}>
              <DescriptionTitle>Descrição do Produto</DescriptionTitle>
              <ProductDescription html={product.details?.description} />
            </ProductDescriptionContainer>
          </ShowMore>
          <Dialog
            {...modalOptions}
            onConfirm={() => setModalOptions({...modalOptions, visible: false})}
          />
        </Card>
      )}
    </Container>
  );
}

ProductDetails.navigationOptions = {
  title: 'detalhes do produto',
};

export default ProductDetails;
