import AsyncStorage from '@react-native-async-storage/async-storage';

//  menyimpan data ke penyimpanan lokal menggunakan AsyncStorage.
export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value)); //key sebagai kunci (identifier) untuk data yang akan disimpan, dan value sebagai nilai yang akan disimpan.
  } catch (e) {
    // saving error
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      return JSON.parse(value)
    }else{
      return 0;
    }
  } catch (e) {
    // error reading value
  }
};

export const clearStorage = async() =>{
  AsyncStorage.clear();
}