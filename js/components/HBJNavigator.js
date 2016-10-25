import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';
import BrewedBeerCards from './BrewedBeerCards';

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        ref="navigator"
        initialRoute={{
          component: BrewedBeerCards,
          title: 'Homebrew Journal'
        }}
        style={{flex:1}}
      />
    );
  }
}
