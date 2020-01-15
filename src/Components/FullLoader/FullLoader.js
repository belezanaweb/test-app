import React from 'react';
import { LoaderOverlay } from './FullLoader.styles';
import { PulseIndicator } from 'react-native-indicators';
import { Colors } from '../../Styleguide';

const FullLoader = () => (
  <LoaderOverlay>
    <PulseIndicator color={Colors.primary} size={100} />
  </LoaderOverlay>
);

export default FullLoader;
