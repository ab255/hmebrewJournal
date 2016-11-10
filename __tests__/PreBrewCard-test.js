import 'react-native';
import React from 'react';
import PreBrewCard from '../js/tabs/PreBrewCard.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <PreBrewCard />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
