import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type MainStackParamList = {
  Home: undefined;
  ProductDetail: { sku: string };
};
type RootStackParamList = {
  MainStack: undefined;
  GlobalModal: { hasInventory: boolean };
};

type HomeNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

type ProductDetailNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParamList, 'ProductDetail'>,
  StackNavigationProp<RootStackParamList>
>;

type GlobalModalNavigationProp = CompositeNavigationProp<
  StackNavigationProp<MainStackParamList>,
  StackNavigationProp<RootStackParamList, 'GlobalModal'>
>;

export type HomeProps = {
  route: RouteProp<MainStackParamList, 'Home'>;
  navigation: HomeNavigationProp;
};

export type ProductDetailProps = {
  route: RouteProp<MainStackParamList, 'ProductDetail'>;
  navigation: ProductDetailNavigationProp;
};

export type GlobalModalProps = {
  route: RouteProp<RootStackParamList, 'GlobalModal'>;
  navigation: GlobalModalNavigationProp;
};
