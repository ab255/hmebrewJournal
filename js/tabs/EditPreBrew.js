import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

class EditPreBrew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BeerName: this.props.beerName,
      BeerType: this.props.beerType,
      Ingredients: this.props.ingredients,
      Water: this.props.water,
      PostBrewIngredients: this.props.postBrewIngredients,
      TotalCosts: this.props.totalCosts,
    }
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text>Beer Name:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(BeerName) => this.setState({BeerName})}
            value={this.state.BeerName}
          />
        </View>
        <View>
          <Text>Beer Type:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(BeerType) => this.setState({BeerType})}
            value={this.state.BeerType}
          />
        </View>
        <View>
          <Text>Ingredients:</Text>
          <TextInput
            multiline={true}
            style={styles.ingredientsInput}
            onChangeText={(Ingredients) => this.setState({Ingredients})}
            value={this.state.Ingredients}
          />
        </View>
        <View>
          <Text>Water Notes:</Text>
          <TextInput
            multiline={true}
            style={styles.brewInput}
            onChangeText={(Water) => this.setState({Water})}
            value={this.state.Water}
          />
        </View>
        <View>
          <Text>Post Brew Ingredients:</Text>
          <TextInput
            multiline={true}
            style={styles.ingredientsInput}
            onChangeText={(PostBrewIngredients) => this.setState({PostBrewIngredients})}
            value={this.state.PostBrewIngredients}
          />
        </View>
        <View>
          <Text>Total Cost:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(TotalCosts) => this.setState({TotalCosts})}
            value={this.state.TotalCosts}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  brewInput: {
    height: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: '#630A10',
  },
  ingredientsInput: {
    height: 100,
    fontSize: 16,
  },
})

export default EditPreBrew;
