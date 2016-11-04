import React, {Component} from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

class PostBrewCard extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text>Fermentation Start</Text>
          <Text>{this.props.dateStartFermentation}</Text>
        </View>
        <View>
          <Text>Fermentation Notes</Text>
          <Text>{this.props.fermentationNotes}</Text>
        </View>
        <View>
          <Text>Packaging Date</Text>
          <Text>{this.props.packagingDate}</Text>
        </View>
        <View>
          <Text>Final Gravity</Text>
          <Text>{this.props.hydrometerReading}</Text>
        </View>
        <View>
          <Text>Type of Packaging</Text>
          <Text>{this.props.typeOfPackaging}</Text>
        </View>
        <View>
          <Text>Packaging Notes</Text>
          <Text>{this.props.notesAboutPackaging}</Text>
        </View>
      </ScrollView>
    )
  }
}

export default PostBrewCard;
