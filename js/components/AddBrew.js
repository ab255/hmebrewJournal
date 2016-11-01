import React, { Component } from 'react';
import {
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  TouchableHighlight,
  DatePickerIOS,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import moment from 'moment';

export default class AddBrew extends Component {
  constructor(props){
    super();
    this.state = {
      beerName: '',
      beerType: '',
      ingredients: '',
      water: '',
      postBrewIngredients: '',
      totalCosts: '',
      brewDate: new Date(),
      datePickerMode: 'hidden',
    }
  }

  toggleDatePicker = () => {
    let mode = this.state.datePickerMode =='hidden' ? 'visible' : 'hidden';
    this.setState({ datePickerMode: mode });
  }

  onDateChange = (date) => {
    this.setState({ brewDate: date })
  }

  addBrewData = () => {

  }

  render() {
    let datePicker = (
      <View>
        <DatePickerIOS
          date={this.state.brewDate}
          mode='date'
          onDateChange={this.onDateChange.bind(this)}
        />
      </View>
    )
    return (
      <ScrollView style={styles.container}>
        <Text>Beer Name:</Text>
        <TextInput
          style={styles.brewInput}
          onChangeText={(beerName) => this.setState({beerName})}
          value={this.state.beerName}
          placeholder='Beer Name'
        />
        <Text>Beer Style:</Text>
        <TextInput
          style={styles.brewInput}
          onChangeText={(beerType) => this.setState({beerType})}
          value={this.state.beerType}
          placeholder='Beer Style'
        />
        <Text>Ingredients:</Text>
        <TextInput
          multiline={true}
          style={styles.ingredientsInput}
          onChangeText={(ingredients) => this.setState({ingredients})}
          value={this.state.ingredients}
          placeholder='Add ingredients used'
        />
        <Text>Water:</Text>
        <TextInput
          style={styles.brewInput}
          onChangeText={(water) => this.setState({water})}
          value={this.state.water}
          placeholder='Water Used'
        />
        <Text>Post Brew Ingredients:</Text>
        <TextInput
          multiline={true}
          style={styles.ingredientsInput}
          onChangeText={(postBrewIngredients) => this.setState({postBrewIngredients})}
          value={this.state.postBrewIngredients}
          placeholder='Add post brew ingredients'
        />
        <Text>Total Cost:</Text>
        <TextInput
          style={styles.brewInput}
          onChangeText={(totalCosts) => this.setState({totalCosts})}
          value={this.state.totalCosts}
          placeholder='Cost in Dollars'
        />
        <View style={styles.container}>
          <View>
            <Text>Estimated Brew Date:</Text>
            <TouchableWithoutFeedback onPress={ this.toggleDatePicker.bind(this) }>
              <View style={ styles.input }>
                <Text>{moment(this.state.brewDate).format('MMMM Do YYYY')}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          { this.state.datePickerMode == 'visible' ? datePicker : <View/> }
        </View>
        <TouchableHighlight>
          <View>
            <Text>Submit</Text>
          </View>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
  },
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
