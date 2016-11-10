import 'react-native';
import React from 'react';
import EditBrewDay from '../js/tabs/EditBrewDay.js';
import store from '../js/mockStore.js'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  let beer = store
  const tree = renderer.create(
    <EditBrewDay route={ { beer } } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
