import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';
import ProductListView from '../ProductListView';
import { product } from '../../../__mocks__/product';

describe('ProductListView', () => {
  test('should callback when press more', async () => {
    const onPressMore = jest.fn();

    const { getByTestId } = render(
      <ProductListView
        data={[product, product]}
        onPressMore={onPressMore}
      />
    );

    // Did the product list render?
    await waitFor(() => expect(getByTestId('ProductList')).toBeDefined());

    fireEvent.press(getByTestId('MoreProducts'));
    expect(onPressMore).toHaveBeenCalledTimes(1);
  });

  test('should have no paginator when set as false', async () => {
    const { getByTestId, queryByTestId } = render(
      <ProductListView
        data={[product, product]}
        visiblePaginator={false}
      />
    );

    // Did the product list render?
    await waitFor(() => expect(getByTestId('ProductList')).toBeDefined());

    expect(queryByTestId('MoreProducts')).toBeNull();
  });
});
