import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Text from '../../atoms/Text';

type props = {
  title: string;
  description: string;
};

const ProductDescritption: React.FC<props> = ({
  title,
  description,
}): JSX.Element => {
  return (
    <View
      style={{
        alignItems: 'flex-start',
        padding: 10,
      }}
    >
      <Text
        size={20}
        color="black"
        fontWeight="500"
        style={{ paddingBottom: 10 }}
      >
        {title}
      </Text>

      <Text color="#6F6F6F" fontWeight="400" size={15}>
        cod: {description}
      </Text>
    </View>
  );
};

export default ProductDescritption;
