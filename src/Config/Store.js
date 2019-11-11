import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { logger } from "redux-logger";
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import rootReducer from '../redux/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};
const middleware = [thunk];

const Store = createStore(
  persistedReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);
const persistor = persistStore(Store);

export { Store, persistor };
