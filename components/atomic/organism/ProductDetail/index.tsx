import React from 'react';
import { View } from 'react-native';
import { product } from '../../../../src/util/types';
import Text from '../../atoms/Text';
import Card from '../../atoms/Card';
import Image from '../../atoms/Image';
import Price from '../../molecules/Price';
import ProductCode from '../../molecules/ProductCode';
import ProductDescription from '../../molecules/ProductDescription';
import Button from '../../atoms/Button';

type props = {
  product: product;
  onPress: () => void;
};

const ProductDetail: React.FC<props> = ({ product, onPress }): JSX.Element => {
  const { name, priceSpecification, imageObjects, brand } = product;
  const { originalPrice, price, sku, installments } = priceSpecification;
  const { numberOfPayments } = installments;
  const [imageObject] = imageObjects.filter((item) => item.featured);
  const avaliable = product.inventory.quantity > 0;

  return (
    <Card flex={1} style={{ marginBottom: 20 }}>
      <View style={{ flex: 7 }}>
        <Text size={20} fontWeight="500">
          {name}
        </Text>
        <View
          style={{
            alignItems: 'center',
            flex: 4,
            marginBottom: 15,
          }}
        >
          <Image uri={imageObject.large} type="big" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 2,
          }}
        >
          <Price current={price} split={numberOfPayments} type="big" />
          <ProductCode name={brand.line.name} sku={sku} />
        </View>
        <View style={{ flex: 5 }}>
          <Button
            title={avaliable ? 'COMPRE' : 'AVISE-ME'}
            type={avaliable ? 'primary' : 'secundary'}
            onPress={onPress}
          />
          <ProductDescription
            title="Descrição do Produto"
            description={brand.line.description}
            numberOfLines={10}
          />
        </View>
      </View>
    </Card>
  );
};
export default ProductDetail;
