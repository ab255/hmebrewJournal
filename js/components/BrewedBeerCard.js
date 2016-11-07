import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
} from 'react-native';
import moment from 'moment';

const BrewedBeerCard = ({ beerName, beerType, brewDate, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={styles.brewedBeerCard}>
        <View>
          <Text style={styles.beerCardTitle}>{beerName}</Text>
          <Text style={styles.beerCardType}>{beerType}</Text>
          <Text style={styles.beerCardDate}>{moment(brewDate).format('MMMM Do YYYY')}</Text>
        </View>
        <View>
          <Image source={require('../icons/arrow-right-card.png')} />
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  brewedBeerCard: {
    flexDirection: 'row',
    backgroundColor: '#FCF0C8',
    borderBottomWidth: 1,
    borderColor: '#630A10',
    marginBottom: 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  beerCardTitle: {
    color: '#630A10',
    fontSize: 20,
    fontWeight: 'bold',
  },
  beerCardType: {
    color: '#630A10',
  },
  beerCardDate: {
    color: '#630A10',
  },
})

module.exports = BrewedBeerCard;
