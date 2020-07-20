import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Api } from '../services/Api';
import { ProductAllProps } from '../types/Types';
import { formatPrice, stripSpecialChars } from '../helpers/Helpers';
import { getAsyncStorageData, setAsyncStorageData } from '../helpers/AsyncStorage';
import LottieView from 'lottie-react-native';
import { ThemeStyles } from '../theme/Theme';
import ProductDetailsCard from '../components/ProductDetailsCard';
import ProductModal from '../components/ProductModal';

const LoadingProduct = require('../assets/lottie/loadingProduct.json');

const ProductDetails = ({ navigation, route }: any) => {
  const { product } = route.params;
  const { sku } = product;

  const [loading, setLoading] = useState(true);
  const [fullProduct, setFullProduct] = useState({} as ProductAllProps);
  const [productModal, setProductModal] = useState(false);

  useEffect(() => {
    getAsyncStorageData(`product_${stripSpecialChars(sku)}`)
    .then((_product) => {
      /* istanbul ignore if */
      if (_product && _product.name) {
        setTimeout(() => {
          setFullProduct(_product);
          setLoading(false);
        }, 150);
      }

      loadProductDetails();
    })
    
    .catch(/* istanbul ignore next */
      (err) => {
        loadProductDetails();
      }
    );
  }, []);

  const loadProductDetails = () => {
    Api.products.get(`/${sku}`)
    .then((res: any) => {
      if (res.status === 200) {
        const p: any = res.data;

        const _product: ProductAllProps = {
          sku: p.sku,
          name: p.name,
          price: formatPrice('BRL', p.priceSpecification.price),
          maxPrice: formatPrice('BRL', p.priceSpecification.maxPrice),
          picture: p.imageObjects.filter((img: any) => img.featured)[0] || p.imageObjects[0],
          gallery: p.imageObjects,
          numberOfPayments: p.priceSpecification.installments.numberOfPayments,
          monthlyPayment: formatPrice('BRL', p.priceSpecification.installments.monthlyPayment),
          description: p.details.description || '',
          brand: p.brand.name,
          inventory: p.inventory.quantity || 0,
        }

        setFullProduct(_product);

        setAsyncStorageData(`product_${stripSpecialChars(sku)}`, _product);
      }
    })
    .catch((err) => {
      navigation.goBack(null);
    })
    .then(() => {
      setLoading(false);
    })
  }

  return (
    <>
      { !loading ?
        <>
          { !!productModal &&
            <ProductModal
              product={fullProduct}
              template={fullProduct.inventory ? 'orderSuccess' : 'outOfStock'}
              onClose={() => {
                setTimeout(() => setProductModal(false), 500);
              }}
            />
          }

          <ScrollView contentContainerStyle={styles.scrollView}>
            <ProductDetailsCard
              product={fullProduct}
              onPress={() => setProductModal(true)}
            />
          </ScrollView>
        </>
      :
        <View style={ThemeStyles.loading.container}>
          <LottieView
            source={LoadingProduct}
            style={styles.loadingAnimation}
            autoPlay
            loop={true}
            speed={1}
          />
        </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    paddingBottom: 20,
  },
  loadingAnimation: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '32%',
    marginTop: 170,
  },
});

export default ProductDetails;
