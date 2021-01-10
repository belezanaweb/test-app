import React, { useEffect } from 'react';
import { SafeAreaView, Alert } from 'react-native';
import useBoticario from '../../hooks/useBoticario';
import ProductDetail from '../../../components/atomic/organism/ProductDetail';

type props = {
  route: any;
};
const Detail: React.FC<props> = ({ route }): JSX.Element => {
  const { setSku, productDetail } = useBoticario();

  useEffect(() => {
    const { sku } = route.params;
    setSku(sku);
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <ProductDetail product={productDetail} onPress={() => {}} />
    </SafeAreaView>
  );
};

export default Detail;
