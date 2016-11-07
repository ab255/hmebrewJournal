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

class EditBrewDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BrewDate: this.props.brewDate,
      TimeStarted: this.props.timeStarted,
      Weather: this.props.weather,
      MashNotes: this.props.mashNotes,
      BoilNotes: this.props.boilNotes,
      PostBoilNotes: this.props.postBoilNotes,
      OgReading: this.props.ogReading,
      datePickerMode: 'hidden',
    }
  }

  toggleDatePicker = () => {
    let mode = this.state.datePickerMode =='hidden' ? 'visible' : 'hidden';
    this.setState({ datePickerMode: mode });
  }

  onDateChange = (date) => {
    this.setState({ BrewDate: date })
  }

  render() {
    let datePicker = (
      <View style={styles.datePicker}>
        <DatePickerIOS
          date={new Date(this.state.BrewDate)}
          mode='date'
          onDateChange={this.onDateChange.bind(this)}
          stlye={styles.datePicker}
        />
      </View>
    )
    return (
      <KeyboardAwareScrollView style={styles.container}>
        <View>
          <View>
          <Text style={styles.title}>Brew Date:</Text>
            <TouchableWithoutFeedback onPress={ this.toggleDatePicker.bind(this) }>
              <View style={styles.dateField}>
                <Text style={styles.dateText}>
                  {moment(this.state.BrewDate).format('MMMM Do YYYY')}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          { this.state.datePickerMode == 'visible' ? datePicker : <View/> }
          <Text style={styles.title}>(Click Date To Toggle Date Picker)</Text>
        </View>
        <View>
          <Text style={styles.title}>Start Time:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(TimeStarted) => this.setState({TimeStarted})}
            value={this.state.TimeStarted}
            keyboardType='numbers-and-punctuation'
            placeholder='Start of brewing time'
          />
        </View>
        <View>
          <Text style={styles.title}>Current Weather:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(Weather) => this.setState({Weather})}
            value={this.state.Weather}
            keyboardType='decimal-pad'
            placeholder='Current temperature'
          />
        </View>
        <View>
          <Text style={styles.title}>Mash/Steep Notes:</Text>
          <TextInput
            multiline={true}
            style={styles.ingredientsInput}
            onChangeText={(MashNotes) => this.setState({MashNotes})}
            value={this.state.MashNotes}
            placeholder='Mash or steep notes (if any)'
          />
        </View>
        <View>
          <Text style={styles.title}>Boil Notes:</Text>
          <TextInput
            multiline={true}
            style={styles.ingredientsInput}
            onChangeText={(BoilNotes) => this.setState({BoilNotes})}
            value={this.state.BoilNotes}
            placeholder='Add boil notes'
          />
        </View>
        <View>
          <Text style={styles.title}>Post Boil Notes:</Text>
          <TextInput
            multiline={true}
            style={styles.ingredientsInput}
            onChangeText={(PostBoilNotes) => this.setState({PostBoilNotes})}
            value={this.state.PostBoilNotes}
            placeholder='Add post boil notes'
          />
        </View>
        <View>
          <Text style={styles.title}>Original Gravity:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(OgReading) => this.setState({OgReading})}
            value={this.state.OgReading}
            placeholder='Original gravity ex. 1.065'
            keyboardType='decimal-pad'
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

export default EditBrewDay;
