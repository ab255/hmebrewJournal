import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import HBJNavigator from './HBJNavigator';
import BrewedBeerCards from './BrewedBeerCards';

export default class HBJApp extends Component {

  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        {/* <HBJNavigator /> */}
        <BrewedBeerCards />
      </View>
    );
  }
}
