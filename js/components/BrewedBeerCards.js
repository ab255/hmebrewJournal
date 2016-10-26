import React, { Component } from 'react';
import { ListView, Text, View } from 'react-native';

import BrewedBeerCard from './BrewedBeerCard';
import store from '../store.js';

class MoreInformation extends Component {
  render () {
    console.log('I AM HERE', this.props)
    return (
      <View>
        <Text>Current Scene: { this.props.route.beer.beerName }</Text>
        <Text>Current Scene: { this.props.route.beer.beerName }</Text>
        <Text>Current Scene: { this.props.route.beer.beerName }</Text>
        <Text>Current Scene: { this.props.route.beer.beerName }</Text>
        <Text>Current Scene: { this.props.route.beer.beerName }</Text>
        <Text>Current Scene: { this.props.route.beer.beerName }</Text>
        <Text>Current Scene: { this.props.route.beer.beerName }</Text>
      </View>
    );
  };
}

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
            component: MoreInformation,
            title: beer.beerName,
            beer
          });
        }}/>}
      />
    )
  }
}
