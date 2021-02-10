import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import { useProductDetail } from 'utils/customHooks/useProducts';

describe('Test of useProductDetail custom hook', () => {
  test('Should render hook without re render and loadings on', async () => {
    const { result } = renderHook(() => useProductDetail());
    expect(result.current[0]).toBeUndefined();
    expect(result.current[1]).toBe(true);
    expect(typeof result.current[2]).toBe('function');
  }, 30000);

  test('Should fetch productBySku, return product and set loading to false', async () => {
    const { result } = renderHook(() => useProductDetail());

    await act(async () => {
      await result.current[2]('54417');
    });

    act(() => {
      expect(result.current[0]).not.toBeUndefined();
      expect(result.current[1]).toBe(false);
    });
    cleanup();
  }, 30000);

  afterAll(done => {
    cleanup();
    done();
  });
});
