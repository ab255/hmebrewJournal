import 'react-native';
import React from 'react';
import EditPreBrew from '../js/tabs/EditPreBrew.js';
import store from '../js/mockStore.js'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  let beer = store
  const tree = renderer.create(
    <EditPreBrew route={ { beer } } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
