import React, { Component } from 'react';
import {
  TouchableHighlight,
  View,
  Text,
} from 'react-native';

const BrewedBeerCard = ({ BeerName, BeerType, BrewDate }) => {
  return (
    <TouchableHighlight>
      <View>
        <Text>{BeerName}</Text>
        <Text>{BeerType}</Text>
        <Text>{BrewDate}</Text>
      </View>
    </TouchableHighlight>
  )
}

module.exports = BrewedBeerCard;
