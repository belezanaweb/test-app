import { Platform } from 'react-native';
import { theme } from 'shared/theme';

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
