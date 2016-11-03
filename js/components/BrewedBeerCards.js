import React, { Component } from 'react';
import { AsyncStorage, ListView } from 'react-native';
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
      brews: [],
    };
  }

  componentDidMount() {
    this.loadInitialState().done();
  }

  loadInitialState = async () => {
    let store;
    try {
      await AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
          stores.map((result, i, store) => {
            let key = store[i][0];
            let value = store[i][0];
            console.log(autoRehydrate(stores));
          })
        })
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
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
    );
  };
}
