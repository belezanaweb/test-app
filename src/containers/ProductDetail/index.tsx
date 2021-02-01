import React from 'react';
import { Text, View } from 'react-native';
import { ProductDetailProps } from 'shared/types/Router';

const ProductDetail: React.FC<ProductDetailProps> = ({ navigation, route }) => {
  const {
    params: { sku },
  } = route;
  console.log('sku', sku);
  return (
    <View style={{ backgroundColor: 'blue', flex: 1 }}>
      <Text>Primeiro commit!</Text>
    </View>
  );
};

export default ProductDetail;
