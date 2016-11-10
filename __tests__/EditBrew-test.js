import 'react-native';
import React from 'react';
import EditBrew from '../js/components/EditBrew.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <EditBrew />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
