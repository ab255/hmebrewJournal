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
    return (
      <ScrollView>
        <Text>Beer Name</Text>
        <Text>{this.props.beerName}</Text>
        <Text>Beer Type</Text>
        <Text>{this.props.beerType}</Text>
        <Text>Ingredients</Text>
        <Text>{this.props.ingredients}</Text>
        <Text>Water Notes</Text>
        <Text>{this.props.water}</Text>
        <Text>Post Brew Ingredients</Text>
        <Text>{this.props.postBrewIngredients}</Text>
        <Text>Total Cost</Text>
        <Text>{this.props.totalCosts}</Text>
      </ScrollView>
    )
  }
}

export default PreBrewCard;
