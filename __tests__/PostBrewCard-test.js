import 'react-native';
import React from 'react';
import PostBrewCard from '../js/tabs/PostBrewCard.js';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <PostBrewCard />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
