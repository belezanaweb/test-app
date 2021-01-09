import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Text from '../../atoms/Text';

type props = {
  name: string;
  sku: string;
};

const Price: React.FC<props> = ({ name, sku }): JSX.Element => {
  return (
    <View style={{ alignItems: 'flex-end' }}>
      <Text size={20} color="black" fontWeight="500">
        {name}
      </Text>

      <Text color="#6F6F6F" fontWeight="400" size={15}>
        cod: {sku}
      </Text>
    </View>
  );
};

export default Price;
