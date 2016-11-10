import React, {Component} from 'react';
import {
  DatePickerIOS,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import moment from 'moment';

import store from '../store'

class EditPostBrew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateStartFermentation: this.props.route.beer.dateStartFermentation || new Date(),
      fermentationNotes: this.props.route.beer.fermentationNotes || '',
      packagingDate: this.props.route.beer.packagingDate || new Date(),
      hydrometerReading: this.props.route.beer.hydrometerReading || '',
      typeOfPackaging: this.props.route.beer.typeOfPackaging || '',
      notesAboutPackaging: this.props.route.beer.notesAboutPackaging || '',
      datePickerModeOne:'hidden',
      datePickerModeTwo: 'hidden',
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

  toggleDatePickerOne = () => {
    let mode = this.state.datePickerModeOne =='hidden' ? 'visible' : 'hidden';
    this.setState({ datePickerModeOne: mode });
  }

  onDateChangeOne = (dateOne) => {
    this.setState({ dateStartFermentation: dateOne })
  }

  toggleDatePickerTwo = () => {
    let mode = this.state.datePickerModeTwo =='hidden' ? 'visible' : 'hidden';
    this.setState({ datePickerModeTwo: mode });
  }

  onDateChangeTwo = (dateTwo) => {
    this.setState({ packagingDate: dateTwo })
  }

  render() {
    let datePickerOne = (
      <View style={styles.datePicker}>
        <DatePickerIOS
          date={new Date(this.state.dateStartFermentation)}
          mode='date'
          onDateChange={this.onDateChangeOne.bind(this)}
          stlye={styles.datePicker}
        />
      </View>
    )
    let datePickerTwo = (
      <View style={styles.datePicker}>
        <DatePickerIOS
          date={new Date(this.state.packagingDate)}
          mode='date'
          onDateChange={this.onDateChangeTwo.bind(this)}
          stlye={styles.datePicker}
        />
      </View>
    )
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View>
          <View>
            <Text style={styles.title}>Fermentation Start:</Text>
              <TouchableWithoutFeedback onPress={this.toggleDatePickerOne.bind(this) }>
                <View style={styles.dateField}>
                  <Text style={styles.dateText}>
                    {moment(this.state.dateStartFermentation).format('MMMM Do YYYY')}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            { this.state.datePickerModeOne == 'visible' ? datePickerOne : <View/> }
            <Text style={styles.title}>(Click Date To Toggle Date Picker)</Text>
        </View>
        <View>
          <Text style={styles.title}>Fermentation Notes:</Text>
          <TextInput
            multiline={true}
            style={styles.ingredientsInput}
            onChangeText={(fermentationNotes) => this.setState({fermentationNotes})}
            value={this.state.fermentationNotes}
            placeholder='Fermentation notes'
          />
        </View>
        <View>
          <View>
            <Text style={styles.title}>Packaging Date:</Text>
              <TouchableWithoutFeedback onPress={this.toggleDatePickerTwo.bind(this) }>
                <View style={styles.dateField}>
                  <Text style={styles.dateText}>
                    {moment(this.state.packagingDate).format('MMMM Do YYYY')}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            { this.state.datePickerModeTwo == 'visible' ? datePickerTwo : <View/> }
            <Text style={styles.title}>(Click Date To Toggle Date Picker)</Text>
        </View>
        <View>
          <Text style={styles.title}>Final Gravity:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(hydrometerReading) => this.setState({hydrometerReading})}
            value={this.state.hydrometerReading}
            placeholder='Final gravity ex. 1.026'
            keyboardType='decimal-pad'
          />
        </View>
        <View>
          <Text style={styles.title}>Type of Packaging:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(typeOfPackaging) => this.setState({typeOfPackaging})}
            value={this.state.typeOfPackaging}
            placeholder='Type of packaging'
          />
        </View>
        <View>
          <Text style={styles.title}>Packaging Notes:</Text>
          <TextInput
            multiline={true}
            style={styles.ingredientsInput}
            onChangeText={(notesAboutPackaging) => this.setState({notesAboutPackaging})}
            value={this.state.notesAboutPackaging}
            placeholder='Notes about packaging'
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

export default EditPostBrew;
