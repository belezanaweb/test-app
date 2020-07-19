import {
  isJson,
  setAsyncStorageData,
  getAsyncStorageData,
  removeAsyncStorageItem,
  clearAsyncStorageData,
} from '../AsyncStorage';

describe('Async Storage Helper', () => {
  test('Utils: Check if data is a json', () => {
    expect(isJson('{ "key": "value" }')).toBe(true);
    expect(isJson('data')).toBe(false);
    expect(isJson({ key: "value" })).toBe(false);
  });

  test('Set data', async () => {
    expect(await setAsyncStorageData('key1', 'string')).toBeFalsy();
    expect(await setAsyncStorageData('key2', { val: 2 })).toBeFalsy();
  });

  test('Get data by key', async () => {
    expect(await getAsyncStorageData('key1')).toBe('string');
    expect(await getAsyncStorageData('key2')).toStrictEqual({ val: 2 });
  });

  test('Remove data by key', async () => {
    await removeAsyncStorageItem('key')
    .then(async () => {
      expect(await getAsyncStorageData('key')).toBeFalsy();
    });
  });

  test('Clear all data', async () => {
    clearAsyncStorageData()
    .then(async () => {
      expect(await getAsyncStorageData('anotherKey')).toBeFalsy();
    });
  });
});
