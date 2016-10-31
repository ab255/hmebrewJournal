import React, {Component} from 'react';
import {
  ScrollView,
  Text,
} from 'react-native';

class PostBrewCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <Text>Fermentation Start</Text>
        <Text>{this.props.dateStartFermentation}</Text>
        <Text>Fermentation Notes</Text>
        <Text>{this.props.fermentationNotes}</Text>
        <Text>Packaging Date</Text>
        <Text>{this.props.packagingDate}</Text>
        <Text>Final Gravity</Text>
        <Text>{this.props.hydrometerReading}</Text>
        <Text>Type of Packaging</Text>
        <Text>{this.props.typeOfPackaging}</Text>
        <Text>Packaging Notes</Text>
        <Text>{this.props.notesAboutPackaging}</Text>
      </ScrollView>
    )
  }
}

export default PostBrewCard;
