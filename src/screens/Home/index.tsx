import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { products, productsDetail } from '../../services/boticatio.api';
import useBoticario from '../../hooks/useBoticario';
const Home = () => {
  const { productList, setPage, productDetail, setSku } = useBoticario();
  const navigation = useNavigation();
  useEffect(() => {}, [productDetail]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Produtos</Text>
      <Button title="Details" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default Home;
