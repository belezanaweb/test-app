import { renderHook } from '@testing-library/react-hooks';
import useBoticario from './index';

jest.mock('../../services/boticatio.api', () => {
  const { listProductMock } = require('./mocks/products');
  const { productDetailMock } = require('./mocks/productDetail');
  return {
    products: () => Promise.resolve(listProductMock),
    productsDetail: () => Promise.resolve(productDetailMock),
  };
});

describe('Tests of useBoticario', () => {
  it('should get list of Movies', async () => {
    const hookUseBoticario = Object.assign(useBoticario);
    const testingLibraryReturn = renderHook(() => hookUseBoticario());

    const { result, waitForNextUpdate } = testingLibraryReturn;

    await waitForNextUpdate();
    const productsList = result.current.productList;
    expect(productsList.length).toEqual(8);
  });
});
