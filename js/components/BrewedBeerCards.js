import React, { Component } from 'react';
import { ListView } from 'react-native';

import BrewedBeerCard from './BrewedBeerCard';
import store from '../store.js';
import IndividualBrewNotes from './IndividualBrewNotes';


export default class BrewedBeerCards extends Component {
  constructor(props) {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(store),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(beer) => <BrewedBeerCard {...beer} onPress={() => {
          this.props.navigator.push({
            component: IndividualBrewNotes,
            title: beer.beerName,
            beer
          });
        }}/>}
      />
    )
  }
}
