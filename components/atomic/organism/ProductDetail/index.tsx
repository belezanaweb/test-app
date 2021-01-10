import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { product, imageObjects, brand } from '../../../../src/util/types';
import Text from '../../atoms/Text';
import Card from '../../atoms/Card';
import Image from '../../atoms/Image';
import Price from '../../molecules/Price';
import ProductCode from '../../molecules/ProductCode';
import ProductDescription from '../../molecules/ProductDescription';
import Button from '../../atoms/Button';
import Dialog from '../../atoms/Dialog';

const dialogInfos = {
  info: {
    title: 'Esta é uma ótima escolha!',
    description: 'Você gostaria de adicionar este produto no seu carrinho?',
  },
  input: {
    title: 'Esta é uma ótima escolha!',
    description:
      'Mas infelizmente não está disponivel agora, deixe seu nome e e-mail que vamos te avisar quando estiver disponível.',
  },
};

type props = {
  product?: product;
  onPress: (available: boolean) => void;
};

const ProductDetail: React.FC<props> = ({ product, onPress }): JSX.Element => {
  const [name, setName] = useState<string>();
  const [originalPrice, setOriginalPrice] = useState<number>(0);
  const [numberOfPayments, setNumberOfPayments] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const [sku, setSku] = useState<string>();
  const [imageObject, setImageObject] = useState<imageObjects>();
  const [available, setAvailable] = useState<boolean>(false);
  const [brand, setBrand] = useState<brand>();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [dialogContent, setDialogContent] = useState(dialogInfos.info);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setBrand(product.brand);
      setAvailable(product.inventory.quantity > 0);
      setDialogContent(
        product.inventory.quantity > 0 ? dialogInfos.info : dialogInfos.input
      );

      const { priceSpecification, imageObjects } = product;
      if (imageObjects) {
        const [imageObject] = imageObjects.filter((item) => item.featured);
        setImageObject(imageObject ? imageObject : imageObjects[0]);
      }

      if (priceSpecification) {
        const { originalPrice, price, sku, installments } = priceSpecification;
        setNumberOfPayments(installments.numberOfPayments);
        setOriginalPrice(originalPrice);
        setPrice(price);
        setSku(sku);
      }
    }
  }, [product]);

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
          {imageObject && <Image uri={imageObject.large} type="big" />}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 2,
          }}
        >
          <Price
            old={originalPrice === price ? undefined : originalPrice}
            current={price}
            split={numberOfPayments}
            type="big"
          />
          {brand && sku && <ProductCode name={brand.line?.name} sku={sku} />}
        </View>
        <View style={{ flex: 5 }}>
          <Button
            title={available ? 'COMPRE' : 'AVISE-ME'}
            type={available ? 'primary' : 'secundary'}
            onPress={() => {
              onPress(available);
              setShowDialog(true);
            }}
          />
          {brand?.line && (
            <ProductDescription
              title="Descrição do Produto"
              description={brand.line.description}
              numberOfLines={10}
            />
          )}
        </View>
      </View>
      <Dialog
        visible={showDialog}
        title={dialogContent.title}
        type={available ? 'info' : 'input'}
        description={dialogContent.description}
        onPressNegative={() => setShowDialog(false)}
        onPressPositive={() => setShowDialog(false)}
      />
    </Card>
  );
};
export default ProductDetail;
