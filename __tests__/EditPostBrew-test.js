import 'react-native';
import React from 'react';
import EditPostBrew from '../js/tabs/EditPostBrew.js';
import store from '../js/mockStore.js'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  let beer = store
  const tree = renderer.create(
    <EditPostBrew route={ { beer } } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
