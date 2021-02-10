import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import { useProductsList } from 'utils/customHooks/useProducts';

// If need render providers
// import 'jest-styled-components';
// import 'react-native-gesture-handler/jestSetup';
// const MainStack = createStackNavigator<MainStackParamList>();
// jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
// jest.mock('react-native-reanimated', () => {
//   const Reanimated = require('react-native-reanimated/mock');
//   Reanimated.default.call = () => {};
//   return Reanimated;
// });

describe('Test of useProducts custom hook', () => {
  test('Should render hook without re render and loadings on', async () => {
    const { result } = renderHook(() => useProductsList(1, 10));
    expect(result.current[0]).toHaveLength(0);
    expect(result.current[1]).toBe(1);
    expect(result.current[2]).toBe(true);
    expect(result.current[3]).toBe(true);
    expect(typeof result.current[4]).toBe('function');
  }, 30000);

  test('Should fetch first time without page and turn off loadings after', async () => {
    const { result } = renderHook(() => useProductsList(1, 10));

    await act(async () => {
      await result.current[4]();
    });

    act(() => {
      expect(result.current[0]).toHaveLength(10);
      expect(result.current[1]).toBe(1);
      expect(result.current[2]).toBe(false);
      expect(result.current[3]).toBe(false);
    });
    cleanup();
  }, 30000);

  test('Should fetch two times: first without page param and second with page that was returned by hook', async () => {
    const { result } = renderHook(() => useProductsList(1, 10));

    await act(async () => {
      await result.current[4]();
    });

    act(() => {
      expect(result.current[2]).toBe(false);
      expect(result.current[2]).toBe(false);
    });

    await act(async () => {
      await result.current[4](result.current[1] + 1);
    });

    act(() => {
      expect(result.current[0]).toHaveLength(20);
      expect(result.current[1]).toBe(2);
      expect(result.current[2]).toBe(false);
      expect(result.current[3]).toBe(false);
    });
    cleanup();
  }, 30000);

  afterAll(done => {
    cleanup();
    done();
  });
});
