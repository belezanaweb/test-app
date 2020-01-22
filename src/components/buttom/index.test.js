import 'jest-styled-components';
// do not forget the /native at the end of the line.
import React from 'react';
import renderer from 'react-test-renderer';
import ButtomProject from './index';

describe('Component Buttom Snapshot', () => {
	test('Buttom Snapshot', () => {
		const tree = renderer.create(<ButtomProject name="Leo" background="#fff" />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
