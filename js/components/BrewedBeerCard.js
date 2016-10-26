import React, { Component } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
} from 'react-native';

const BrewedBeerCard = ({ beerName, beerType, brewDate, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.brewedBeerCard}>
        <Text style={styles.beerCardTitle}>{beerName}</Text>
        <View>
          <Text style={styles.beerCardType}>{beerType}</Text>
          <Text style={styles.beerCardDate}>{brewDate}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  brewedBeerCard: {
    backgroundColor: '#FCF0C8',
    borderBottomWidth: 1,
    borderColor: '#630A10',
  },
  beerCardTitle: {
    color: '#630A10',
    fontSize: 20,
  },
  beerCardType: {
    color: '#630A10',
  },
  beerCardDate: {
    color: '#630A10',
  },
})

module.exports = BrewedBeerCard;
