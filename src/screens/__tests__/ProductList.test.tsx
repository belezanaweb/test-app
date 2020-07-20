import React from 'react';
import { render, waitFor, act } from 'react-native-testing-library';
import ProductList from '../ProductList';

// This test should be improved

describe('ProductList', () => {
  test('should render product list', async () => {
    const { queryByTestId } = render(
      <ProductList />
    );

    await expect(queryByTestId('ProductList')).toBeDefined();
  });
});
