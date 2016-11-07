import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
      <KeyboardAwareScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>Beer Name:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(BeerName) => this.setState({BeerName})}
            value={this.state.BeerName}
            placeholder='Beer Name'
            autoCapitalize='words'
          />
        </View>
        <View>
          <Text style={styles.title}>Beer Type:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(BeerType) => this.setState({BeerType})}
            value={this.state.BeerType}
            placeholder='Beer Style'
            autoCapitalize='words'
          />
        </View>
        <View>
          <Text style={styles.title}>Ingredients:</Text>
          <TextInput
            multiline={true}
            style={styles.ingredientsInput}
            onChangeText={(Ingredients) => this.setState({Ingredients})}
            value={this.state.Ingredients}
            placeholder='Beer Style'
            autoCapitalize='words'
          />
        </View>
        <View>
          <Text style={styles.title}>Water Notes:</Text>
          <TextInput
            multiline={true}
            style={styles.brewInput}
            onChangeText={(Water) => this.setState({Water})}
            value={this.state.Water}
            placeholder='Water Used'
          />
        </View>
        <View>
          <Text style={styles.title}>Post Brew Ingredients:</Text>
          <TextInput
            multiline={true}
            style={styles.ingredientsInput}
            onChangeText={(PostBrewIngredients) => this.setState({PostBrewIngredients})}
            value={this.state.PostBrewIngredients}
            placeholder='Add post brew ingredients'
          />
        </View>
        <View>
          <Text style={styles.title}>Total Cost:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(TotalCosts) => this.setState({TotalCosts})}
            value={this.state.TotalCosts}
            placeholder='Cost in Dollars'
            keyboardType='numbers-and-punctuation'
          />
        </View>
        <TouchableHighlight
        >
          <View style={styles.submitButton}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableHighlight>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#911F27',
    flex: 1,
    padding: 10,
  },
  title: {
    color: '#F7D098',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  brewInput: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    color: '#630A10',
    height: 30,
    paddingLeft: 5,
    marginBottom: 10,
  },
  ingredientsInput: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    color: '#630A10',
    paddingLeft: 5,
    height: 100,
    fontSize: 16,
    marginBottom: 10,
  },
  submitButton: {
    alignSelf: 'center',
    backgroundColor: '#F7D098',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    width: 300,
    height: 30,
    margin: 20,
    },
  buttonText: {
    color: '#630A10',
    fontSize: 16,
  },
})

export default EditPreBrew;
