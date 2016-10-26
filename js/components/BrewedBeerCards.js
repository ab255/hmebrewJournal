import React, { Component } from 'react';
import { View } from 'react-native';

import BrewedBeerCard from './BrewedBeerCard';
import store from '../store.js';


export default class BrewedBeerCards extends Component {
  render() {
    return (
      <View>
        {store.map(function(beer, i){
          return (
            <BrewedBeerCard
              key={i}
              BeerName={beer.beerName}
              BeerType={beer.beerType}
              BrewDate={beer.brewDate}
            />
          )
        })}
      </View>

    )
  }
}
