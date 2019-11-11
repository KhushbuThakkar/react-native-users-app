import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import rootReducer from './src/redux/reducers';
import UsersContainer from './src/Containers/UsersContainer';
import thunkMiddleware from 'redux-thunk';
import { View, Text } from 'react-native';
// import { store, persistor } from './src/Config/Store';

//bellow is the code for redux configurations
function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunkMiddleware));
  return createStore(rootReducer, initialState, enhancer);
}
const store = configureStore({});

const App = () => {
  return (
    <Provider store={store}>
      <UsersContainer />
    </Provider>
  );
};

export default App;
