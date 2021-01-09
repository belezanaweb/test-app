import React from 'react';
import { View } from 'react-native';
import Text from '../../atoms/Text';

type props = {
  name: string;
  sku: string;
};

const ProductCode: React.FC<props> = ({ name, sku }): JSX.Element => {
  return (
    <View style={{ alignItems: 'flex-end' }}>
      <Text size={32} color="black" fontWeight="500">
        {name}
      </Text>

      <Text color="#6F6F6F" fontWeight="400" size={17}>
        cod: {sku}
      </Text>
    </View>
  );
};

export default ProductCode;
