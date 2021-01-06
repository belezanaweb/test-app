import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Produtos</Text>
      <Button title="Details" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
};

export default Home;
