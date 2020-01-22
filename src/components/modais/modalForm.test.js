import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import modalFormRemember from './modalFormRememberMe';

describe('Component Modal Form Remember', () => {
	test('test Snapshot', () => {
		const tree = renderer.create(<modalFormRemember />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
