import { Alert, Platform, ToastAndroid } from 'react-native';
import theme from 'shared/styles/theme';
import appLabels from './appLabels';
import { ImageObject, PriceSpecification } from 'shared/types/Product';

type getFontWeightProps = {
  weight: 'normal' | 'bold';
};

export function getFontWeight({ weight }: getFontWeightProps) {
  switch (Platform.OS) {
    case 'ios':
      return theme.dimensions.text.fontFamily.ios[weight];
    case 'android':
      return theme.dimensions.text.fontFamily.android[weight];
    default:
      return theme.dimensions.text.fontFamily.default;
  }
}

type getFeaturedImageProps = {
  imageObjects: ImageObject[];
  size?: 'thumbnail' | 'small' | 'medium' | 'large' | 'extraLarge' | 'imageUrl';
};

export function getFeaturedImage({
  imageObjects,
  size = 'small',
}: getFeaturedImageProps) {
  const foundedImage = imageObjects.find(image => image.featured === true);
  return foundedImage
    ? foundedImage[size]
    : 'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png';
}

export function getFormatedCurrency(value: number) {
  return value.toLocaleString(appLabels.common.locale, {
    style: 'currency',
    currency: appLabels.common.currency,
  });
}

export function showToast(msg: string) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert(msg);
  }
}

export function getFormatedPrice(priceSpecification: PriceSpecification) {
  const maxPrice = getFormatedCurrency(priceSpecification.maxPrice);
  const price = getFormatedCurrency(priceSpecification.price);
  const hasPriceDifference = price < maxPrice;
  return { maxPrice, price, hasPriceDifference };
}
