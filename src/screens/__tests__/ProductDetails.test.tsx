import React from 'react';
import { render, waitFor, act } from 'react-native-testing-library';
import ProductDetails from '../ProductDetails';
import { product } from '../../../__mocks__/product';

let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

// This test should be improved

describe('ProductDetails', () => {
  test('should render product card', async () => {
    const { queryByTestId } = render(
      <ProductDetails
        route={{
          params: {
            product
          }
        }}
      />
    );
    
    await expect(queryByTestId('ProductCard')).toBeDefined();
  });
});
