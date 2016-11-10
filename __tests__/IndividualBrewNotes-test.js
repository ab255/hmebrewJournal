import 'react-native';
import React from 'react';
import IndividualBrewNotes from '../js/components/IndividualBrewNotes.js';
import store from '../js/mockStore.js'
import '../js/tabs/PreBrewCard';
import '../js/tabs/BrewDayCard';
import '../js/tabs/PostBrewCard';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  jest.mock('react-native', () => 'TabBarIOS');
  jest.mock('react-native', () => 'TabBarIOS.Item');
  jest.mock('../js/tabs/PreBrewCard', () => 'PreBrewCard');
  jest.mock('../js/tabs/BrewDayCard', () => 'BrewDayCard');
  jest.mock('../js/tabs/PostBrewCard', () => 'PostBrewCard');
  let beer = store
  const tree = renderer.create(
    <IndividualBrewNotes route={ { beer } } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
