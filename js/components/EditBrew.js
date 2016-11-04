import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TabBarIOS,
} from 'react-native';

import EditPreBrew from '../tabs/EditPreBrew';
import EditBrewDay from '../tabs/EditBrewDay';
import EditPostBrew from '../tabs/EditPostBrew';

export default class IndividualBrewNotes extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    selectedTab: 'preBrew',
  };

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
          <EditPreBrew
            {...this.props.route.beer}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Brew Day'
          selected={this.state.selectedTab === 'brewDay'}
          onPress={() => {
            this.setState({ selectedTab : 'brewDay'});
          }}>
            <EditBrewDay
              {...this.props.route.beer}
            />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            title='Post Brew'
            selected={this.state.selectedTab === 'postBrew'}
            onPress={() => {
              this.setState({ selectedTab : 'postBrew'});
          }}>
            <EditPostBrew
              {...this.props.route.beer}
            />
          </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}
