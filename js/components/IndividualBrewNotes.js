import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class IndividualBrewNotes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.route.beer.beerName}</Text>
        <Text>{this.props.route.beer.beerType}</Text>
        <Text>{this.props.route.beer.brewNotes}</Text>
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    marginTop: 70,
  }
})
