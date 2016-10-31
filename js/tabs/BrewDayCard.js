import React, {Component} from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';

class BrewDayCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <Text>Brew Date</Text>
        <Text>{this.props.brewDate}</Text>
        <Text>Start Time</Text>
        <Text>{this.props.timeStarted}</Text>
        <Text>Current weather</Text>
        <Text>{this.props.weather}</Text>
        <Text>Mash/Steep Notes</Text>
        <Text>{this.props.mashNotes}</Text>
        <Text>Boil Notes</Text>
        <Text>{this.props.boilNotes}</Text>
        <Text>Post Boil Notes</Text>
        <Text>{this.props.postBoilNotes}</Text>
        <Text>Original Gravity</Text>
        <Text>{this.props.ogReading}</Text>
      </ScrollView>
    )
  }
}

export default BrewDayCard;
