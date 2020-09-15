import { Platform } from 'react-native';

import { robotoWeights, sanFranciscoWeights } from 'react-native-typography';

export default {
  ...Platform.select({
    ios: sanFranciscoWeights,
    android: robotoWeights,
  }),
};
