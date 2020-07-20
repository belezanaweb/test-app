import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import ProductModal from '../ProductModal';
import { product } from '../../../__mocks__/product';

describe('ProductModal', () => {
  test('should render product name', () => {
    const { getByTestId } = render(
      <ProductModal
        product={product}
        template='orderSuccess'
        onClose={() => {}}
      />
    );

    const ProductName = getByTestId('ProductName').children.toString();
    expect(ProductName).toBe(product.name);
  });

  test('should close on press button', () => {
    const onPressSend = jest.fn();

    const { getByTestId } = render(
      <ProductModal
        product={product}
        template='outOfStock'
        onClose={onPressSend}
      />
    );

    fireEvent.press(getByTestId('SendButton'));
    expect(onPressSend).toHaveBeenCalledTimes(1);
  });

  test('should callback on type text', () => {
    const onChangeText = jest.fn();

    const { getByTestId } = render(
      <ProductModal
        product={product}
        template='outOfStock'
        onChangeText={onChangeText}
      />
    );

    const nameInput = getByTestId('nameInput');
    const name = 'Name';

    const emailInput = getByTestId('emailInput');
    const email = 'Email';

    fireEvent.changeText(nameInput, name);
    fireEvent.changeText(emailInput, email);

    expect(onChangeText).toBeCalledWith(name);
    expect(onChangeText).toBeCalledWith(email);
  });
});
