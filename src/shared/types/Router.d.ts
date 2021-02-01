import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type MainStackParamList = {
  Home: undefined;
  ProductDetail: { sku: string };
};
type RootStackParamList = {
  MainStack: undefined;
  GlobalModal: undefined;
};

type ProductDetailRouteProp = RouteProp<MainStackParamList, 'ProductDetail'>;
type ProductDetailNavigationProp = StackNavigationProp<
  MainStackParamList,
  'ProductDetail'
>;

export type ProductDetailProps = {
  route: ProductDetailRouteProp;
  navigation: ProductDetailNavigationProp;
};

type HomeRouteProp = RouteProp<MainStackParamList, 'Home'>;
export type HomeNavigationProp = StackNavigationProp<
  MainStackParamList,
  'Home'
>;

export type HomeProps = {
  route: HomeRouteProp;
  navigation: HomeNavigationProp;
};
