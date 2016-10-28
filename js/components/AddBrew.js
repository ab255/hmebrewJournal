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

export default class AddBrew extends Component {
  constructor(props){
    super();
    this.state = {
      beerName: '',
      beerType: '',
      brewDate: new Date(),
      brewNotes: '',
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
        <View style={styles.container}>
          <View>
            <Text>Date</Text>
            <TouchableWithoutFeedback onPress={ this.toggleDatePicker.bind(this) }>
              <View style={ styles.input }>
                <Text>{ this.state.brewDate.getMonth() + 1 }/{ this.state.brewDate.getDate() }/{ this.state.brewDate.getFullYear() }</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          { this.state.datePickerMode == 'visible' ? datePicker : <View/> }
        </View>
        <Text>Brew Notes:</Text>
        <TextInput
          multiline={true}
          style={styles.brewNotesInput}
          onChangeText={(brewNotes) => this.setState({brewNotes})}
          value={this.state.brewNotes}
          placeholder='Take notes on your entire beer process'
        />
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
  brewNotesInput: {
    height: 100,
    fontSize: 16,
  },
})
