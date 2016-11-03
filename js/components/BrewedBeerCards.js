import React, { Component } from 'react';
import {
  AsyncStorage,
  ListView,
  ScrollView,
  Text,
} from 'react-native';
import { autoRehydrate } from 'redux-persist';

import BrewedBeerCard from './BrewedBeerCard';
import mockStore from '../store.js';
import IndividualBrewNotes from './IndividualBrewNotes';
import EditBrew from './EditBrew';


export default class BrewedBeerCards extends Component {
  constructor(props) {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(mockStore),
      brews: null,
      isLoading: true,
      test: null,
    };
  }

  componentDidMount() {
    this.loadInitialState()
    console.log(this.state.brews);
  }

  componentDidUpdate() {
    // this.loadInitialState()
    console.log(this.state.brews);
    // this.setState({ dataSource: ds.cloneWithRows(this.state.brews)})
  }

  loadInitialState = async () => {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let brewsArray = []
    try {
      await AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
          stores.map((result, i, store) => {
            let value = store[i][1];
            brewsArray.push(JSON.parse(value))
          })
        })
      })
    } catch (error) {
      console.log(error);
    }
    this.setState({ brews: brewsArray })
    console.log(this.state.brews);
  }

  render() {
    return (
      <ScrollView>
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
