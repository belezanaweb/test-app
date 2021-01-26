import { Alert, Platform, ToastAndroid } from 'react-native';
import { theme } from 'shared/theme';
import appLabels from './appLabels';
import { ImageObject } from './types/Product';

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

export function getFeaturedImage(imageObjects: ImageObject[]) {
  const foundedImage = imageObjects.find(image => image.featured === true);
  return (
    foundedImage?.small ||
    'https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png'
  );
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
