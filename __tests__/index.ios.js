import 'react-native';
import React from 'react';
import setup from '../js/setup.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <setup />
  );
});
