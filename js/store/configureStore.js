import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from '../reducers/reducers';


const createBrewStore = applyMiddleware(thunk)(createStore);

const configureStore = () => {
  const store = autoRehydrate()(createBrewStore)(reducers);
  persistStore(store, {storage: AsyncStorage});
  return store;
}

export default configureStore;
