import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TabBarIOS,
} from 'react-native';

import PreBrewCard from '../tabs/PreBrewCard';
import BrewDayCard from '../tabs/BrewDayCard';
import PostBrewCard from '../tabs/PostBrewCard';


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
          <PreBrewCard
            {...this.props.route.beer}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('../icons/brewDay.png')}
          title='Brew Day'
          selected={this.state.selectedTab === 'brewDay'}
          onPress={() => {
            this.setState({ selectedTab : 'brewDay'});
          }}>
            <BrewDayCard
              {...this.props.route.beer}
            />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={require('../icons/postBrew.png')}
            title='Post Brew'
            selected={this.state.selectedTab === 'postBrew'}
            onPress={() => {
              this.setState({ selectedTab : 'postBrew'});
          }}>
            <PostBrewCard
              {...this.props.route.beer}
            />
          </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

styles = StyleSheet.create({
  container: {
  }
})
