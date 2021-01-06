import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { products, productsDetail } from '../../services/boticatio.api';

const Home = () => {
  const navigation = useNavigation();
  useEffect(() => {
    products(1, 2).then((response) => {
      const teste = response;
    });
    productsDetail('54417').then((response) => {
      const teste = response;
    });
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Produtos</Text>
      <Button title="Details" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default Home;
