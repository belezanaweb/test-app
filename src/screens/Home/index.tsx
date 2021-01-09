import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import ProductDetail from '../../../components/atomic/organism/ProductDetail';
import ItemCard from '../../../components/atomic/organism/ItemCard';
import { product } from '../../util/types';

import { useNavigation } from '@react-navigation/native';

import useBoticario from '../../hooks/useBoticario';
const Home = () => {
  const { productList, setPage, productDetail, setSku } = useBoticario();
  const [product, setProduct] = useState<product>();
  const navigation = useNavigation();

  useEffect(() => {
    if (productList.length) {
      setProduct(productList[0]);
    }
  }, [productList]);

  return (
    <View style={{ paddingLeft: 10, flex: 1 }}>
      {product && <ProductDetail product={product} onPress={() => {}} />}
      {/* {product && <ItemCard product={product} />} */}
    </View>
  );
};

export default Home;
