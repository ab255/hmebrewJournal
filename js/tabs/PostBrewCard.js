import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import moment from 'moment';

class PostBrewCard extends Component {
  constructor(props) {
    super(props);
    let OG = (
      JSON.parse(this.props.ogReading || null)
    )
    let FG = (
      JSON.parse(this.props.hydrometerReading || null)
    )
    let ABV = (
      (((OG - FG) * 1000) / 7.5).toFixed(1)
    )
    let attenuation = (
      ((1000 * ((OG - FG) / OG))).toFixed(1)
    )
    this.state = {
      ABV: ABV,
      Attenuation: attenuation,
    }
  }


  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>Fermentation Start</Text>
          <Text style={styles.body}>
            {moment(this.props.dateStartFermentation).format('MMMM Do YYYY')}
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Fermentation Notes</Text>
          <Text style={styles.body}>{this.props.fermentationNotes}</Text>
        </View>
        <View>
          <Text style={styles.title}>Packaging Date</Text>
          <Text style={styles.body}>
            {moment(this.props.packagingDate).format('MMMM Do YYYY')}
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Final Gravity</Text>
          <Text style={styles.body}>{this.props.hydrometerReading}</Text>
        </View>
        <View>
          <Text style={styles.title}>ABV</Text>
          <Text style={styles.body}>
            {this.state.ABV}%
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Attenuation</Text>
          { isNaN(this.state.Attenuation) === false ?
            <Text style={styles.body}>
            {this.state.Attenuation}%
            </Text> :
            <Text style={styles.body}>
              0.0%
            </Text>
          }
        </View>
        <View>
          <Text style={styles.title}>Type of Packaging</Text>
          <Text style={styles.body}>{this.props.typeOfPackaging}</Text>
        </View>
        <View>
          <Text style={styles.title}>Packaging Notes</Text>
          <Text style={styles.body}>{this.props.notesAboutPackaging}</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    color: '#911F27',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 7,
  },
  body: {
    color: '#630A10',
    fontSize: 16,
    marginBottom: 10,
  },
})

export default PostBrewCard;
