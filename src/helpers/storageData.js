const localKey = 'yoCriptoSome$$$';

export function storeData(value, key = localKey) {
  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (e) {
    console.info('Error storeData method: ', e);
  }
}

export function getData(key = localKey) {
  try {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.info('Error getting Data: ', e);
  }
  return null;
}

export function clearData(key = localKey) {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.info('clearData error: ', err);
  }
}
