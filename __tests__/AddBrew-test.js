import 'react-native';
import React from 'react';
import AddBrew from '../js/components/AddBrew.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <AddBrew />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
