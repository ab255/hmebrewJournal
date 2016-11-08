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

import store from '../store'

class EditPreBrew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beerName: this.props.route.beer.beerName || '',
      beerType: this.props.route.beer.beerType || '',
      ingredients: this.props.route.beer.ingredients || '',
      water: this.props.route.beer.water || '',
      postBrewIngredients: this.props.route.beer.postBrewIngredients || '',
      totalCosts: this.props.route.beer.totalCosts || '',
    }
  }

  editBrew = async () => {
    let uid = JSON.stringify(this.props.route.beer.uuid)
    let brew = JSON.stringify(this.state)
    try {
      await store.edit(uid, brew)
      this.props.navigator.popToTop()
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>Beer Name:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(beerName) => this.setState({beerName})}
            value={this.state.beerName}
            placeholder='Beer Name'
            autoCapitalize='words'
          />
        </View>
        <View>
          <Text style={styles.title}>Beer Type:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(beerType) => this.setState({beerType})}
            value={this.state.beerType}
            placeholder='Beer Style'
            autoCapitalize='words'
          />
        </View>
        <View>
          <Text style={styles.title}>Ingredients:</Text>
          <TextInput
            multiline={true}
            style={styles.ingredientsInput}
            onChangeText={(ingredients) => this.setState({ingredients})}
            value={this.state.ingredients}
            placeholder='Beer Style'
          />
        </View>
        <View>
          <Text style={styles.title}>Water Notes:</Text>
          <TextInput
            multiline={true}
            style={styles.brewInput}
            onChangeText={(water) => this.setState({water})}
            value={this.state.water}
            placeholder='Water Used'
          />
        </View>
        <View>
          <Text style={styles.title}>Post Brew Ingredients:</Text>
          <TextInput
            multiline={true}
            style={styles.ingredientsInput}
            onChangeText={(postBrewIngredients) => this.setState({postBrewIngredients})}
            value={this.state.postBrewIngredients}
            placeholder='Add post brew ingredients'
          />
        </View>
        <View>
          <Text style={styles.title}>Total Cost:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(totalCosts) => this.setState({totalCosts})}
            value={this.state.totalCosts}
            placeholder='Cost in Dollars'
            keyboardType='numbers-and-punctuation'
          />
        </View>
        <TouchableHighlight
        onPress={this.editBrew.bind(this)}
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
    paddingTop: 0,
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
