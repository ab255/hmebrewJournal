import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

class EditPostBrew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DateStartFermentation: this.props.dateStartFermentation,
      FermentationNotes: this.props.fermentationNotes,
      PackagingDate: this.props.packagingDate,
      HydrometerReading: this.props.hydrometerReading,
      TypeOfPackaging: this.props.typeOfPackaging,
      NotesAboutPackaging: this.props.notesAboutPackaging,
    }
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text>Fermentation Start</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(DateStartFermentation) => this.setState({DateStartFermentation})}
            value={this.state.DateStartFermentation}
          />
        </View>
        <View>
          <Text>Fermentation Notes</Text>
          <TextInput
            multiline={true}
            style={styles.brewInput}
            onChangeText={(FermentationNotes) => this.setState({FermentationNotes})}
            value={this.state.FermentationNotes}
          />
        </View>
        <View>
          <Text>Packaging Date</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(PackagingDate) => this.setState({PackagingDate})}
            value={this.state.PackagingDate}
          />
        </View>
        <View>
          <Text>Final Gravity</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(HydrometerReading) => this.setState({HydrometerReading})}
            value={this.state.HydrometerReading}
          />
        </View>
        <View>
          <Text>Type of Packaging</Text>
          <TextInput
            style={styles.brewInput}
            onChangeText={(TypeOfPackaging) => this.setState({TypeOfPackaging})}
            value={this.state.TypeOfPackaging}
          />
        </View>
        <View>
          <Text>Packaging Notes</Text>
          <TextInput
            multiline={true}
            style={styles.brewInput}
            onChangeText={(NotesAboutPackaging) => this.setState({NotesAboutPackaging})}
            value={this.state.NotesAboutPackaging}
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

export default EditPostBrew;
