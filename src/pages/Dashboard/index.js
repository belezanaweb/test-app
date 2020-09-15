import React, {useState, useEffect, useCallback} from 'react';
import {ActivityIndicator} from 'react-native';

import {
  Container,
  ProductList,
  Product,
  ProductCode,
  ProductImageContainer,
  ProductImage,
  ProductText,
  ProductInfoContainer,
  PriceContainer,
  OldPrice,
  NewPrice,
  LoadingContainer,
} from './styles';
import * as productsService from '~/services/products';

import fonts from '~/util/fonts';
import Button from '~/components/Button';

const ITEM_HEIGHT = 145;

function Dashboard({navigation}) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [canLoadMore, setCanLoadMore] = useState(true);

  async function loadProducts() {
    setLoading(true);

    try {
      const {data, lastPage} = await productsService.getByPage(page);

      if (data) {
        setProducts(products.concat(data));
        setPage(page + 1);

        if (lastPage) {
          setCanLoadMore(false);
        }
      }
    } catch (err) {
      // TODO: Tratativa de erro
      console.log('err', err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const getItemLayout = useCallback((data,index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index
  }))

  function renderProducts({item}) {
    return (
      <Product
        onPress={() => navigation.navigate('ProductDetails', {product: item})}>
        <ProductImageContainer>
          <ProductImage source={{uri: item.featuredImage?.imageUrl}} />
          <ProductCode>cod: {item.sku}</ProductCode>
        </ProductImageContainer>
        <ProductInfoContainer>
          <ProductText style={fonts.medium}>{item.name}</ProductText>
          <PriceContainer>
            {item.oldPrice !== item.newPrice && (
              <OldPrice style={fonts.medium}>{item.oldPrice}</OldPrice>
            )}
            <NewPrice style={fonts.bold}>{item.newPrice}</NewPrice>
          </PriceContainer>
          <Button title="ver detalhes" />
        </ProductInfoContainer>
      </Product>
    );
  }

  return (
    <Container>
      {products.length === 0 && loading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" />
        </LoadingContainer>
      ) : (
        <>
          <ProductList
            data={products}
            keyExtractor={item => String(item.sku)}
            renderItem={renderProducts}
            getItemLayout={getItemLayout}
            windowSize={11}
            maxToRenderPerBatch={8}
            ListFooterComponent={
              canLoadMore && (
                <Button
                  onPress={loadProducts}
                  loading={loading}
                  inverse
                  title="carregar mais produtos"
                />
              )
            }
          />
        </>
      )}
    </Container>
  );
}

Dashboard.navigationOptions = {
  title: 'lista de produtos',
};

export default Dashboard;
