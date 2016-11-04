import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

class BrewDayCard extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text>Brew Date</Text>
          <Text>{this.props.brewDate}</Text>
        </View>
        <View>
          <Text>Start Time</Text>
          <Text>{this.props.timeStarted}</Text>
        </View>
        <View>
          <Text>Current weather</Text>
          <Text>{this.props.weather}</Text>
        </View>
        <View>
          <Text>Mash/Steep Notes</Text>
          <Text>{this.props.mashNotes}</Text>
        </View>
        <View>
          <Text>Boil Notes</Text>
          <Text>{this.props.boilNotes}</Text>
        </View>
        <View>
          <Text>Post Boil Notes</Text>
          <Text>{this.props.postBoilNotes}</Text>
        </View>
        <View>
          <Text>Original Gravity</Text>
          <Text>{this.props.ogReading}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default BrewDayCard;
