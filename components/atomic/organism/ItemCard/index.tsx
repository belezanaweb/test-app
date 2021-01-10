import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { product, imageObjects } from '../../../../src/util/types';
import Text from '../../atoms/Text';
import Card from '../../atoms/Card';
import Image from '../../atoms/Image';
import Price from '../../molecules/Price';
import Button from '../../atoms/Button';

type props = {
  product: product;
  onPress: () => void;
};
const ItemCard: React.FC<props> = ({ product, onPress }): JSX.Element => {
  const [name, setName] = useState<string>();
  const [originalPrice, setOriginalPrice] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [sku, setSku] = useState<string>();
  const [imageObject, setImageObject] = useState<imageObjects>();

  useEffect(() => {
    if (product) {
      setName(product.name);

      const { priceSpecification, imageObjects } = product;
      if (imageObjects) {
        const [imageObject] = imageObjects.filter((item) => item.featured);
        setImageObject(imageObject ? imageObject : imageObjects[0]);
      }

      if (priceSpecification) {
        const { originalPrice, price, sku } = priceSpecification;
        setOriginalPrice(originalPrice);
        setPrice(price);
        setSku(sku);
      }
    }
  }, [product]);
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
          {imageObject && <Image uri={imageObject?.medium} type="medium" />}
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

          <Button title="VER DETALHES" onPress={onPress} />
        </View>
      </View>
    </Card>
  );
};

export default React.memo(ItemCard);
