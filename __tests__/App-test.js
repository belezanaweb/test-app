/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

/* it('renders correctly', () => {
	renderer.create(<App />);
}); */

const teste = a => {
	return a + 1;
};
describe('Button Component', () => {
	it('teste', () => {
		expect(teste(10)).toBe(11);
	});
});
