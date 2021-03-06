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
  }

  render() {
    return (
      <TabBarIOS
        tintColor='#F7D098'
        barTintColor='#630A10'
        style={styles.container}>
        <TabBarIOS.Item
          icon={require('../icons/preBrew.png')}
          title='Pre Brew'
          selected={this.state.selectedTab === 'preBrew'}
          onPress={() => {
            this.setState({ selectedTab: 'preBrew', });
        }}>
          <EditPreBrew
            {...this.props}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('../icons/brewDay.png')}
          title='Brew Day'
          selected={this.state.selectedTab === 'brewDay'}
          onPress={() => {
            this.setState({ selectedTab : 'brewDay'});
          }}>
            <EditBrewDay
              {...this.props}
            />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={require('../icons/postBrew.png')}
            title='Post Brew'
            selected={this.state.selectedTab === 'postBrew'}
            onPress={() => {
              this.setState({ selectedTab : 'postBrew'});
          }}>
            <EditPostBrew
              {...this.props}
            />
          </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 20,
    borderColor: '#F7D098',
  },
})
