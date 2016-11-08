import React, { Component } from 'react';
import {
  AsyncStorage,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import EventEmitter from 'EventEmitter';

import BrewedBeerCard from './BrewedBeerCard';
import mockStore from '../mockStore';
import IndividualBrewNotes from './IndividualBrewNotes';
import EditBrew from './EditBrew';
import store from '../store'


export default class BrewedBeerCards extends Component {
  constructor(props) {
    super();
    this.EventEmitter = new EventEmitter()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(mockStore),
      brews: [],
    };
  }


  componentDidMount() {
    store.addListener('change', async () => {
      try{
        await this.loadInitialState().done()
      } catch (error) {
        console.log(error);
      }
    });
  }

  componentWillMount() {
    this.loadInitialState().done()
  }


  loadInitialState = async () => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    try {
      await AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
          let brews = stores.map(result => JSON.parse(result[1]));
          this.setState({ dataSource: ds.cloneWithRows(brews) })
        })
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(beer) => <BrewedBeerCard
            {...beer}
            onPress={() => {
              this.props.navigator.push({
                component: IndividualBrewNotes,
                title: beer.beerName,
                leftButtonTitle: 'Back',
                onLeftButtonPress: () => {
                  this.props.navigator.pop()
                },
                rightButtonTitle: 'Edit',
                onRightButtonPress: () => {
                  this.props.navigator.push({
                    component: EditBrew,
                    title:beer.beerName,
                    leftButtonTitle: 'Cancel',
                    onLeftButtonPress: () => {
                      this.props.navigator.pop()
                    },
                    beer
                  })
                },
                beer
              });
            }}
          />
        }
      />
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#911F27',
    flex: 1,
  }
})
