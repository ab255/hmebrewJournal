import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TabBarIOS,
} from 'react-native';

import PreBrewCard from '../tabs/PreBrewCard';

export default class IndividualBrewNotes extends Component {
  constructor(props) {
    super();
  }
  state = {
    selectedTab: 'preBrew',
  };

  renderPreBrew = () => {
    return (
      <ScrollView>
        <Text>{this.props.route.beer.beerName}</Text>
        <Text>{this.props.route.beer.beerType}</Text>
        <Text>{this.props.route.beer.brewDate}</Text>
        <Text>{this.props.route.beer.brewNotes}</Text>
      </ScrollView>
    );
  }

  renderBrewDay = () => {
    return (
      <ScrollView>
        <Text>I DID IT</Text>
      </ScrollView>
    )
  }

  renderPostBrew = () => {
    return (
      <ScrollView>
        <Text>I DIT IT AGAIN!</Text>
      </ScrollView>
    )
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor='#FFFFFF'
        tintColor='#630A10'
        barTintColor='#911F27'>
        <TabBarIOS.Item
          title='Pre Brew'
          selected={this.state.selectedTab === 'preBrew'}
          onPress={() => {
            this.setState({ selectedTab: 'preBrew', });
          }}>
            {this.renderPreBrew()}
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='Brew Day'
            selected={this.state.selectedTab === 'brewDay'}
            onPress={() => {
              this.setState({ selectedTab : 'brewDay'});
            }}>
              {this.renderBrewDay()}
            </TabBarIOS.Item>
            <TabBarIOS.Item
              title='Post Brew'
              selected={this.state.selectedTab === 'postBrew'}
              onPress={() => {
                this.setState({ selectedTab : 'postBrew'});
              }}>
              {this.renderPostBrew()}
            </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

styles = StyleSheet.create({
  container: {
  }
})
