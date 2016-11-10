import React, { Component } from 'react';
import {
  ActivityIndicator,
  AlertIOS,
  AsyncStorage,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
      brews: [],
      searchText: '',
    };
  }


  componentDidMount() {
    this.getBrewData().done()
    store.addListener('change', async () => {
      try{
        await this.getBrewData().done()
      } catch (error) {
        console.log(error);
      }
    });
  }

  getBrewData = async () => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    try {
      const brews = await store.all();
      this.setState({
        dataSource: ds.cloneWithRows(brews),
        brews: brews
      })
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

  setSearchText(event) {
  let textInput = event.nativeEvent.text;
  let search = [];
    this.state.brews.forEach(brew => {
      if(brew.beerName.toLowerCase().indexOf(textInput.toLowerCase()) !== -1 ||
        brew.beerType.toLowerCase().indexOf(textInput.toLowerCase()) !== -1) {
        search.push(brew);
      }
    });
    this.setState({
      searchText: textInput,
      dataSource: this.state.dataSource.cloneWithRows(search)
    });
  }

  render() {
    console.log(this.state.brews)
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
          <View>
            <TextInput
              autoCapitalize='words'
              style={styles.searchBar}
              value={this.state.searchText}
              onChange={this.setSearchText.bind(this)}
              placeholder='Search Beer Name or Beer Type'
              returnKeyType='search'
            />
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
          </View>
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
  searchBar: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
    color: '#630A10',
    height: 30,
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  }
})
