import 'react-native';
import React from 'react';
import BrewedBeerCard from '../js/components/BrewedBeerCard.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BrewedBeerCard />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
