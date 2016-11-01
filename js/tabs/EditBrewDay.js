import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

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
    }
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text>Brew Date:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(BrewDate) => this.setState({BrewDate})}
            value={this.state.BrewDate}
          />
        </View>
        <View>
          <Text>Start Time:</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(TimeStarted) => this.setState({TimeStarted})}
            value={this.state.TimeStarted}
          />
        </View>
        <View>
          <Text>Current weather</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(Weather) => this.setState({Weather})}
            value={this.state.Weather}
          />
        </View>
        <View>
          <Text>Mash/Steep Notes</Text>
          <TextInput
            multiline={true}
            style={styles.brewInput}
            onChangeText={(MashNotes) => this.setState({MashNotes})}
            value={this.state.MashNotes}
          />
        </View>
        <View>
          <Text>Boil Notes</Text>
          <TextInput
            multiline={true}
            style={styles.brewInput}
            onChangeText={(BoilNotes) => this.setState({BoilNotes})}
            value={this.state.BoilNotes}
          />
        </View>
        <View>
          <Text>Post Boil Notes</Text>
          <TextInput
            multiline={true}
            style={styles.brewInput}
            onChangeText={(PostBoilNotes) => this.setState({PostBoilNotes})}
            value={this.state.PostBoilNotes}
          />
        </View>
        <View>
          <Text>Original Gravity</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(OgReading) => this.setState({OgReading})}
            value={this.state.OgReading}
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

export default EditBrewDay;
