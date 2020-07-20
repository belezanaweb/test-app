import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Alert } from 'react-native';
import { Api } from '../services/Api';
import ProductListView from '../components/ProductListView';
import { ProductProps } from '../types/Types';
import { formatPrice } from '../helpers/Helpers';
import LottieView from 'lottie-react-native';
import { ThemeStyles } from '../theme/Theme';

const LoadingProducts = require('../assets/lottie/loadingProducts.json');

const ProductList = ({ navigation }: any) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [pagination, setPagination] = useState({ page: 1, size: 5 });
  const [visiblePaginator, setVisiblePaginator] = useState(true);

  useEffect(() => {
    loadProducts();
  }, [pagination])

  const loadProducts = () => {
    Api.products.get(`?page=${pagination.page}&size=${pagination.size}`)
    .then((res: any) => {
      if (res.status === 200) {
        const p: any = res.data;
        const _products: ProductProps[] = [];

        for (let i = 0; i < p.length; i++) {
          _products.push({
            sku: p[i].sku,
            name: p[i].name,
            price: formatPrice('BRL', p[i].priceSpecification.price),
            maxPrice: formatPrice('BRL', p[i].priceSpecification.maxPrice),
            picture: p[i].imageObjects.filter((img: any) => img.featured)[0] || p[i].imageObjects[0],
          });

          if (i === res.data.length - 1) {
            setProducts(products.concat(_products));
          }
        }
      } else if (res.status === 204) {
        // We have no more products, so lets hide paginator.
        setVisiblePaginator(false);
      } else {
        showError();
      }
    })
    .catch((err) => {
      showError();
    })
    .then(() => {
      setTimeout(() => setLoading(false), 300);
    })
  }

  const viewProduct = (product: ProductProps) => {
    navigation.navigate('ProductDetails', { product });
  }

  const showError = () => {
    Alert.alert(
      'Algo deu errado',
      'Não conseguimos listar os produtos. Podemos tentar novamente?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Tentar novamente', onPress: () => loadProducts() }
      ],
    );
  }

  return (
    <View style={styles.container}>
      { !!products && products.length > 0 &&
        <ProductListView
          data={products}
          onPressView={viewProduct}
          onPressMore={() => setPagination({ ...pagination, page: pagination.page + 1 })}
          visiblePaginator={visiblePaginator}
        />
      }

      { !!loading &&
        <View style={ThemeStyles.loading.container}>
          <LottieView
            source={LoadingProducts}
            style={styles.loadingAnimation}
            autoPlay
            loop={true}
            speed={.7}
          />
        </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingAnimation: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    marginTop: -40,
  },
});

export default ProductList;
