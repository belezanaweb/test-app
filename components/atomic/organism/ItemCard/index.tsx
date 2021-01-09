import React from 'react';
import { View } from 'react-native';
import { product } from '../../../../src/util/types';
import Text from '../../atoms/Text';
import Card from '../../atoms/Card';
import Image from '../../atoms/Image';
import Price from '../../molecules/Price';
import Button from '../../atoms/Button';

type props = {
  product: product;
};
const ItemCard: React.FC<props> = ({ product }): JSX.Element => {
  const { name, priceSpecification, imageObjects } = product;
  const { originalPrice, price, sku } = priceSpecification;
  debugger;
  const [imageObject] = imageObjects.filter((item) => item.featured);
  debugger;
  return (
    <Card flex={3} style={{ marginBottom: 15, maxHeight: 250 }}>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View
          style={{
            flex: 1,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <Image uri={imageObject.medium} type="medium" />
          <Text size={16} color="#C4C4C4" fontWeight="700">
            cod: {sku}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            padding: 1,
            height: '100%',
            justifyContent: 'space-around',
          }}
        >
          <Text
            size={20}
            color="black"
            fontWeight="500"
            style={{ paddingBottom: 10 }}
          >
            {name}
          </Text>
          <Price
            current={price}
            old={price === originalPrice ? undefined : originalPrice}
          />
          <Button title="VER DETALHES" onPress={() => {}} />
        </View>
      </View>
    </Card>
  );
};

export default ItemCard;
