/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/screens/Home';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
jest.mock('@react-navigation/native');
it('renders correctly', () => {
  renderer.create(<App />);
});
