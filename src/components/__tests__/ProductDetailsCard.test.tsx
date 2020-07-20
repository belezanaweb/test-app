import React from 'react';
import { render, fireEvent, waitFor } from 'react-native-testing-library';
import ProductDetailsCard from '../ProductDetailsCard';
import { product } from '../../../__mocks__/product';

describe('ProductDetailsCard', () => {
  test('should callback when press buy product', () => {
    const onPress = jest.fn();

    const { getByTestId } = render(
      <ProductDetailsCard
        product={product}
        onPress={onPress}
      />
    );

    fireEvent.press(getByTestId('BuyProduct'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('should callback when press remember me', () => {
    const onPress = jest.fn();

    // Just to improve coverage
    const gallery = [
      { medium: product.picture.large }
    ];

    const { getByTestId } = render(
      <ProductDetailsCard
        product={{ ...product, gallery, inventory: 0, }}
        onPress={onPress}
      />
    );

    fireEvent.press(getByTestId('RememberMe'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  test('button ReadMore should exists when have description', async () => {
    const { getByTestId } = render(
      <ProductDetailsCard
        product={product}
      />
    );

    const ReadMoreBtn = getByTestId('ReadMore');

    expect(ReadMoreBtn).toBeDefined();
  });

  test('button ReadMore should not exists when do not have description', async () => {
    const { queryByTestId } = render(
      <ProductDetailsCard
        product={{ ...product, description: '' }}
      />
    );

    const ReadMoreBtn = queryByTestId('ReadMore');

    expect(ReadMoreBtn).toBeNull();
  });

  test('button ReadMore should not exists when do not have description', async () => {
    const { queryByTestId } = render(
      <ProductDetailsCard
        product={{ ...product, description: '' }}
      />
    );

    const ReadMoreBtn = queryByTestId('ReadMore');

    expect(ReadMoreBtn).toBeNull();
  });

  test('should hide toggle button when pressing ReadMore', async () => {
    const { getByTestId, queryByTestId } = render(
      <ProductDetailsCard
        product={product}
      />
    );

    const ReadMoreBtn = getByTestId('ReadMore');
    fireEvent.press(ReadMoreBtn);

    await waitFor(() => expect(queryByTestId('ReadMore')).toBeNull());
  });
});
