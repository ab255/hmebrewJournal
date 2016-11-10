import 'react-native';
import React from 'react';
import BrewedBeerCards from '../js/components/BrewedBeerCards.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BrewedBeerCards />
  ).toJSON();
  expect(tree.toMatchSnapshot());
});
