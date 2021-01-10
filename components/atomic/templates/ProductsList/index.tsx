import React from 'react';
import { FlatList } from 'react-native';
import ItemCard from '../../organism/ItemCard';
import { product } from '../../../../src/util/types';
type props = {
  productList: Array<product>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  onEndReachedThreshold?: number;
  onPress?: (sku: string) => void;
};
const ProductsList: React.FC<props> = ({
  productList,
  onEndReachedThreshold = 0.5,
  onPress = () => {},
  setPage,
}): JSX.Element => (
  <FlatList
    style={{ paddingLeft: 10 }}
    data={productList}
    renderItem={({ item }) => {
      return <ItemCard product={item} onPress={() => onPress(item.sku)} />;
    }}
    keyExtractor={(_, index) => String(index)}
    onEndReached={() => {
      setPage((value) => value + 1);
    }}
    onEndReachedThreshold={onEndReachedThreshold}
  />
);
export default ProductsList;
