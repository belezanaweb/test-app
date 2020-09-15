import styled from 'styled-components/native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import HTML from 'react-native-render-html';
import ImageLoad from 'react-native-image-placeholder';

export const Container = styled.ScrollView`
  flex: 1;
  background: #fcfcfc;
  padding: 10px 10px ${getBottomSpace()}px 10px;
`;

export const Card = styled.View`
  padding: 10px;
  margin-bottom: 60px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  elevation: 2;
`;

export const ProductHeaderContainer = styled.View``;

export const ProductImage = styled(ImageLoad)`
  width: 163px;
  height: 163px;
  margin-top: 16px;
  align-self: center;
`;

export const ProductName = styled.Text`
  font-size: 20px;
  color: #2d3142;
  text-align: left;
`;

export const ProductBodyContainer = styled.View`
  flex-direction: row;
  margin: 16px 0;
`;

export const ProductPriceContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProductInfoContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: space-around;
`;

export const OldPrice = styled.Text`
  font-size: 14px;
  text-decoration: line-through;
  color: #ccc;
`;

export const NewPrice = styled.Text`
  font-size: 24px;
  color: #ff6c00;
`;

export const PriceMonthly = styled.Text`
  font-size: 17px;
  color: #6f6f6f;
`;

export const ProductDescriptionContainer = styled.View`
  padding: 18px 0;
`;

export const ProductDescription = styled(HTML)``;

export const ProductSku = styled.Text`
  margin-top: 24px;
  text-align: justify;
`;

export const DescriptionTitle = styled.Text`
  font-size: 16px;
  color: #212121;
  font-weight: bold;
`;
