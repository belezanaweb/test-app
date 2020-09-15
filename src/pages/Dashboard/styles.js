import {StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import ImageLoad from 'react-native-image-placeholder';

const {height} = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  background-color: transparent;
  margin: 0 8px ${getBottomSpace()}px 8px;
`;

export const LoadingContainer = styled.View`
  height: ${height - getStatusBarHeight(true) - 60}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-bottom: 5px;
`;

export const Product = styled.TouchableOpacity`
  flex-direction: row;
  height: 145px;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  elevation: 2;
  padding: 5px;
  margin: 5px;
`;

export const ProductImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const ProductImage = styled(ImageLoad).attrs({
  resizeMode: 'cover',
})`
  width: 108;
  height: 108;
`;

export const ProductCode = styled.Text`
  top: 6px;
  font-size: 12px;
  color: #c4c4c4;
`;

export const ProductText = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 12px;
  text-align: left;
  color: #2d3142;
  margin-top: auto;
`;

export const ProductInfoContainer = styled.View`
  flex: 1.5;
  justify-content: space-around;
`;

export const PriceContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const OldPrice = styled.Text`
  font-size: 11px;
  text-decoration: line-through;
  color: #999;
`;

export const NewPrice = styled.Text`
  font-size: 14px;
  color: #f15025;
`;

export const ListHeader = styled.View`
  height: 40px;
  width: 100%;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #aaa;
  justify-content: center;
`;

export const ListName = styled.Text`
  color: #2d3142;
  font-size: 17px;
  letter-spacing: -0.4px;
  margin-left: 16px;
`;
