import React, { Component } from 'react';
import {
  ActivityIndicator,
  AlertIOS,
  AsyncStorage,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
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
      dataSource: null,
    };
  }


  componentDidMount() {
    store.addListener('change', async () => {
      try{
        await this.getBrewData().done()
      } catch (error) {
        console.log(error);
      }
    });
  }

  componentWillMount() {
    this.getBrewData().done()
  }


  getBrewData = async () => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    try {
      const brews = await store.all();
      this.setState({ dataSource: ds.cloneWithRows(brews) })
    } catch (error) {
      console.log(error);
    }
  }

  destroyBrew = async (uuid) => {
    uid = JSON.stringify(uuid)
    try {
      await store.destroy(uid)
      this.props.navigator.popToTop()
    } catch (error){
      console.log(error);
    }
  }

  clearList = async () => {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        { this.state.dataSource === null ?
          <View style={styles.loadingContainer}>
            <ActivityIndicator
            color='#F7D098'
            size='large'
            style={styles.loadingIndicator}
            />
            <Text style={styles.loadingText}>LOADING...</Text>
          </View> :
          <ListView
            enableEmptySections={true}
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
                        rightButtonTitle: 'Delete',
                        onRightButtonPress: () => {
                          AlertIOS.alert(
                            'Delete Brew',
                            'Are you sure you want to delete this brew entry?',
                            [{
                              text: 'Cancel',
                              style: 'cancel'
                            }, {
                              text: 'Delete',
                              onPress: () => this.destroyBrew(beer.uuid),
                              style: 'destructive'
                            }],
                          )
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
        }
      </ScrollView>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#911F27',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#F7D098',
  },
  loadingIndicator: {
    marginTop: 250,
  },
})
