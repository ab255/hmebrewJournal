import 'react-native';
import React from 'react';
import hnjapp from '../js/components/HBJApp.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <hbjapp />
  ).toJSON();
  expect(tree.toMatchSnapshot());
});
