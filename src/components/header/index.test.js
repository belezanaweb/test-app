import 'jest-styled-components';
// do not forget the /native at the end of the line.
import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';

describe('Component Header Snapshot', () => {
	test('Component Header Snapshot', () => {
		const tree = renderer.create(<Header close={false} name="Test" />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
