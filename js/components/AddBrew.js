import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableHighlight,
  DatePickerIOS,
} from 'react-native';

export default class AddBrew extends Component {
  constructor(){
    super();
    this.state = {
      beerName: '',
      beerType: '',
      brewDate: new Date(),
      brewNotes: '',
    }
  }

  onDateChange = (date) => {
    this.setState({brewDate: date})
  }

  render() {
    return (
      <View>
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
        <Text>Brew Date:</Text>
          <DatePickerIOS
            date={this.state.brewDate}
            mode="date"
            onDateChange={this.onDateChange}
          />
        <Text>Brew Notes:</Text>
        <TextInput
          multiline={true}
a
          style={styles.brewNotesInput}
          onChangeText={(brewNotes) => this.setState({brewNotes})}
          value={this.state.brewNotes}
          placeholder='Take notes on your entire beer process'
        />
        <TouchableHighlight style={styles.submitButton}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  brewInput: {
    height: 30,
    borderBottomWidth: 0.5,
    borderBottomColor: '#630A10',
  },
  brewNotesInput: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    height: 100,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#630A10',
    width: 100,
  },
  buttonText: {
    color: '#FFF',
  },
})
