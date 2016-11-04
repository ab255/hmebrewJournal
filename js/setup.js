import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

import HBJApp from './components/HBJApp';

export default class setup extends Component {
  // const store = configureStore(),

  render() {
    return (
      <Provider store={configureStore()}>
        <HBJApp />
      </Provider>
    );
  }
}
