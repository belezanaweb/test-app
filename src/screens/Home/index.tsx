import React from 'react';
import { SafeAreaView } from 'react-native';
import ProductsList from '../../../components/atomic/templates/ProductsList';
import { useNavigation } from '@react-navigation/native';
import useBoticario from '../../hooks/useBoticario';

const Home = () => {
  const { productList, setPage, productDetail, setSku } = useBoticario();

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProductsList
        productList={productList}
        setPage={setPage}
        onPress={(sku) => {
          navigation.navigate('Detail', { sku });
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
