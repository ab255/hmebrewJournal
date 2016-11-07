import React, { Component } from 'react';
import {
  AsyncStorage,
  DatePickerIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import moment from 'moment';
import uuid from 'react-native-uuid'

// import * as actions from '../actions/actions'

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
      uuid: uuid.v4(),
      datePickerMode: 'hidden',
    }
  }

  saveBrew = async () => {
    let uid = this.state.uuid
    let brew = JSON.stringify(this.state)
    try {
      await AsyncStorage.setItem(uid, brew)
    } catch (error) {
      console.log(error);
    }
    console.log(brew)
  }

  moveBack = () => {
    this.props.navigator.pop()
  }

  toggleDatePicker = () => {
    let mode = this.state.datePickerMode =='hidden' ? 'visible' : 'hidden';
    this.setState({ datePickerMode: mode });
  }

  onDateChange = (date) => {
    this.setState({ brewDate: date })
  }

  render() {
    console.log(this.state.brewDate);
    let datePicker = (
      <View style={styles.datePicker}>
        <DatePickerIOS
          date={this.state.brewDate}
          mode='date'
          onDateChange={this.onDateChange.bind(this)}
          stlye={styles.datePicker}
        />
      </View>
    )
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <Text style={styles.title}>Beer Name:</Text>
        <TextInput
          style={styles.brewInput}
          onChangeText={(beerName) => this.setState({beerName})}
          value={this.state.beerName}
          placeholder='Beer Name'
          autoCapitalize='words'
          // autoFocus={true}
        />
        <Text style={styles.title}>Beer Style:</Text>
        <TextInput
          style={styles.brewInput}
          onChangeText={(beerType) => this.setState({beerType})}
          value={this.state.beerType}
          placeholder='Beer Style'
          autoCapitalize='words'
        />
        <Text style={styles.title}>Ingredients:</Text>
        <TextInput
          multiline={true}
          style={styles.ingredientsInput}
          onChangeText={(ingredients) => this.setState({ingredients})}
          value={this.state.ingredients}
          placeholder='Add ingredients used'
        />
        <Text style={styles.title}>Water:</Text>
        <TextInput
          style={styles.brewInput}
          onChangeText={(water) => this.setState({water})}
          value={this.state.water}
          placeholder='Water Used'
        />
        <Text style={styles.title}>Post Brew Ingredients:</Text>
        <TextInput
          multiline={true}
          style={styles.ingredientsInput}
          onChangeText={(postBrewIngredients) => this.setState({postBrewIngredients})}
          value={this.state.postBrewIngredients}
          placeholder='Add post brew ingredients'
        />
        <Text style={styles.title}>Total Cost:</Text>
        <TextInput
        style={styles.brewInput}
        onChangeText={(totalCosts) => this.setState({totalCosts})}
        value={this.state.totalCosts}
        placeholder='Cost in Dollars'
        keyboardType='numbers-and-punctuation'
        />
        <View>
          <View>
          <Text style={styles.title}>Estimated Brew Date:</Text>
            <TouchableWithoutFeedback onPress={ this.toggleDatePicker.bind(this) }>
              <View style={styles.dateField}>
                <Text style={styles.dateText}>{moment(this.state.brewDate).format('MMMM Do YYYY')}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          { this.state.datePickerMode == 'visible' ? datePicker : <View/> }
          <Text style={styles.title}>(Click Date To Toggle Date Picker)</Text>
        </View>
        <TouchableHighlight
          onPress={this.saveBrew.bind(this)}
        >
          <View style={styles.submitButton}>
            <Text style={styles.buttonText}>Submit</Text>
          </View>
        </TouchableHighlight>
      </KeyboardAwareScrollView>
    );
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
    padding: 5,
    marginBottom: 10,
  },
  ingredientsInput: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    color: '#630A10',
    padding: 5,
    height: 100,
    fontSize: 16,
    marginBottom: 10,
  },
  dateField: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 30,
    justifyContent: 'center',
    padding: 5,
    marginBottom: 5,
  },
  dateText: {
    color: '#630A10',
    fontSize: 16,
  },
  datePicker: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 5,
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
