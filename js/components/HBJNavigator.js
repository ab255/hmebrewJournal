import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';
import BrewedBeerCards from './BrewedBeerCards';
import AddBrew from './AddBrew';

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        ref="navigator"
        initialRoute={{
          component: BrewedBeerCards,
          title: 'Homebrew Journal',
          rightButtonTitle: 'Add',
          onRightButtonPress: () => {
            // console.log(this)
            this.refs.navigator.push({
              component: AddBrew,
              title: 'Add A Brew Entry',
              leftButtonTitle: 'Cancel',
              onLeftButtonPress: () => {
                this.refs.navigator.pop()
              },
              rightButtonTitle: 'Add',
            });
          }
        }}
        style={{flex:1}}
      />
    );
  }
}
