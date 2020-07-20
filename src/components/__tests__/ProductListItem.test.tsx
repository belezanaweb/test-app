import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import ProductListItem from '../ProductListItem';
import { product } from '../../../__mocks__/product';

describe('ProductListItem', () => {
  test('should callback when press view product', () => {
    const onPress = jest.fn();

    const { getByTestId } = render(
      <ProductListItem
        product={product}
        onPress={onPress}
      />
    );

    fireEvent.press(getByTestId('ViewProduct'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('should callback when press view product (with no picture)', () => {
    const onPress = jest.fn();

    const { getByTestId } = render(
      <ProductListItem
        product={{...product, picture: null}}
        onPress={onPress}
      />
    );

    fireEvent.press(getByTestId('ViewProduct'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
