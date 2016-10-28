import React, {Component} from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';

class PreBrewCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this)
    return (
      <ScrollView>
        {/* <Text>{this.props.route.beer.beerName}</Text>
        <Text>{this.props.route.beer.beerType}</Text>
        <Text>{this.props.route.beer.brewDate}</Text>
        <Text>{this.props.route.beer.brewNotes}</Text> */}
      </ScrollView>
    )
  }
}

export default PreBrewCard;
