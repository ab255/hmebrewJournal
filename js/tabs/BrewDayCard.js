import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import moment from 'moment';

class BrewDayCard extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>Brew Date</Text>
          <Text style={styles.body}>{moment(this.props.brewDate).format('MMMM Do YYYY')}</Text>
        </View>
        <View>
          <Text style={styles.title}>Start Time</Text>
          <Text style={styles.body}>{this.props.timeStarted}</Text>
        </View> 
        <View>
          <Text style={styles.title}>Current weather</Text>
          <Text style={styles.body}>{this.props.weather} ºF</Text>
        </View>
        <View>
          <Text style={styles.title}>Mash/Steep Notes</Text>
          <Text style={styles.body}>{this.props.mashNotes}</Text>
        </View>
        <View>
          <Text style={styles.title}>Boil Notes</Text>
          <Text style={styles.body}>{this.props.boilNotes}</Text>
        </View>
        <View>
          <Text style={styles.title}>Post Boil Notes</Text>
          <Text style={styles.body}>{this.props.postBoilNotes}</Text>
        </View>
        <View>
          <Text style={styles.title}>Original Gravity</Text>
          <Text style={styles.body}>{this.props.ogReading}</Text>
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

export default BrewDayCard;
