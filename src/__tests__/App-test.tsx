import 'react-native';
import React from 'react';
import renderer, { act } from 'react-test-renderer'; // Note: test renderer must be required after react-native.
import App from '../App';

test('renders app correctly', async () => {
  await act(async () => { renderer.create(<App />) });
});
