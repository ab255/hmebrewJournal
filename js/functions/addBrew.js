import { AsyncStorage } from 'react-native';

const saveBrew = (key, data) => {
  try {
    await AsyncStorage.setItem(key,data);
  } catch (error) {
    console.log('Error');
  }
};

export default saveBrew;
