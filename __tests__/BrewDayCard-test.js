import 'react-native';
import React from 'react';
import BrewDayCard from '../js/tabs/BrewDayCard.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <BrewDayCard />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
