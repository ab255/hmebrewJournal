import 'react-native';
import React from 'react';
import IndividualBrewNotes from '../js/components/IndividualBrewNotes.js';
import store from '../js/mockStore.js'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  let beer= store
  const tree = renderer.create(
    <IndividualBrewNotes route={ { beer } } />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
