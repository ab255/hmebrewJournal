import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

class PreBrewCard extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text>Beer Name</Text>
          <Text>{this.props.beerName}</Text>
        </View>
        <View>
          <Text>Beer Type</Text>
          <Text>{this.props.beerType}</Text>
        </View>
        <View>
          <Text>Ingredients</Text>
          <Text>{this.props.ingredients}</Text>
        </View>
        <View>
          <Text>Water Notes</Text>
          <Text>{this.props.water}</Text>
        </View>
        <View>
          <Text>Post Brew Ingredients</Text>
          <Text>{this.props.postBrewIngredients}</Text>
        </View>
        <View>
          <Text>Total Cost</Text>
          <Text>{this.props.totalCosts}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default PreBrewCard;
