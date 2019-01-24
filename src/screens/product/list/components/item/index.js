import React from 'react';
import { Text, View, Image } from 'react-native';
import { Button, ContainerBox } from 'components';
import { getImageUriFromObject } from 'utils/product';
import { formatCurrency } from 'utils';
import styles from './styles';

export default ({ product, onPress }) => {
  if (!product) return null;
  const { sku, name, imageObjects, priceSpecification } = product;
  return (
    <ContainerBox>
      <View style={styles.containerProduct}>
        <View style={styles.containerLeft}>
          <Image
            source={{
              uri: getImageUriFromObject(imageObjects, 'medium')
            }}
            style={styles.image}
          />
          <Text style={styles.cod}>cod: {sku}</Text>
        </View>
        <View style={styles.containerRight}>
          <View style={styles.contentBox}>
            <Text style={styles.name}>{name} </Text>
            <View>
              {priceSpecification.discount > 0 ? (
                <Text style={styles.maxPrice}>
                  {formatCurrency(priceSpecification.maxPrice)}
                </Text>
              ) : null}
              <Text style={styles.price}>
                {formatCurrency(priceSpecification.price)}
              </Text>
            </View>
            <View style={styles.button}>
              <Button text="VER DETALHES" onPress={() => onPress(product)} />
            </View>
          </View>
        </View>
      </View>
    </ContainerBox>
  );
};
