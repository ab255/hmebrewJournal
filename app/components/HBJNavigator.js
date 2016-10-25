import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';
import HBJApp from './HBJApp.js';

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        ref="navigator"
        intialRoute={{
          component: HBJApp,
          title: 'Homebrew Journal'
        }}
        style={{flex:1}}
      />
    );
  }
}
