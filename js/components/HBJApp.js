import React, { Component } from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import HBJNavigator from './HBJNavigator';
import BrewedBeerCards from './BrewedBeerCards';
import AddBrew from './AddBrew';

export default class HBJApp extends Component {

  render() {
    return (
        <HBJNavigator />
    );
  }
}
