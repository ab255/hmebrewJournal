import React, { Component } from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
// import App from './containers/App';

export default class Root extends Component {

  render() {
    return (
      <View style={styles.homepage}>
        <StatusBar barStyle='light-content'/>
        <Text style={styles.titleOne}>HOMEBREW</Text>
        <Text style={styles.titleTwo}>JOURNAL</Text>
        <Image source={require('./images/homebrewMain.png')} />
        <TouchableOpacity stlye={styles.touch}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homepage: {
    backgroundColor: '#911F27',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  titleOne: {
    marginTop: 30,
    fontSize: 50,
    fontFamily: 'Georgia-Bold',
    textAlign: 'center',
    color: '#FCF0C8',
  },

  titleTwo: {
    fontSize: 50,
    fontFamily: 'Georgia-Bold',
    textAlign: 'center',
    color: '#FCF0C8',
  },

  touch: {
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#FCF0C8',
    borderRadius: 10,
    width: 200,
    height: 70,
    justifyContent: 'center',
  },

  buttonText: {
    fontFamily: 'Georgia-Bold',
    color: '#911F27',
    fontSize: 30,
    textAlign: 'center',
  }
})
