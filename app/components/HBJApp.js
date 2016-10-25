import React, { Component, PropTypes } from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import HBJNavigator from './HBJNavigator';

export default class HBJApp extends Component {

  render() {
    return (
      <View>
        <StatusBar />
        {/* <HBJNavigator /> */}
        <Text>Hello World!</Text>
      </View>
    );
  }
}
