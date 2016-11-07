import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class PreBrewCard extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.title}>Beer Name</Text>
          <Text style={styles.body}>{this.props.beerName}</Text>
        </View>
        <View>
          <Text style={styles.title}>Beer Type</Text>
          <Text style={styles.body}>{this.props.beerType}</Text>
        </View>
        <View>
          <Text style={styles.title}>Ingredients</Text>
          <Text style={styles.body}>{this.props.ingredients}</Text>
        </View>
        <View>
          <Text style={styles.title}>Water Notes</Text>
          <Text style={styles.body}>{this.props.water}</Text>
        </View>
        <View>
          <Text style={styles.title}>Post Brew Ingredients</Text>
          <Text style={styles.body}>{this.props.postBrewIngredients}</Text>
        </View>
        <View>
          <Text style={styles.title}>Total Cost</Text>
          <Text style={styles.body}>{this.props.totalCosts}</Text>
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

export default PreBrewCard;
