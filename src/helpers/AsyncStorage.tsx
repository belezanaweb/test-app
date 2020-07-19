import AsyncStorage from '@react-native-community/async-storage';

export const isJson = (str: any) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }

    return true;
}

export const setAsyncStorageData = async (key: string, value: any) => {
  try {
    if (typeof value === 'object') value = JSON.stringify(value);

    return await AsyncStorage.setItem(key, value);
  } catch (e) {}
};

export const getAsyncStorageData = async (key: string) => {
  try {
    let value: any = await AsyncStorage.getItem(key);

    if (typeof value === 'string') { // isn't string?
      if (isJson(value)) { // is Json?
        return JSON.parse(value);
      }
    }

    return value;
  } catch (e) {}
}

export const removeAsyncStorageItem = async (key: string) => {
  try {
    let value = await AsyncStorage.removeItem(key);

    return value;
  } catch (e) {}
}

export const clearAsyncStorageData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {}
}
