/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {Provider} from 'react-redux';
import store from './Redux/store';
import Screen from './Screens';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Screen />
    </Provider>
  );
}

export default App;
