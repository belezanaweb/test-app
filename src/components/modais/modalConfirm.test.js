import 'jest-styled-components';
// do not forget the /native at the end of the line.
import React from 'react';
import renderer from 'react-test-renderer';
import ModalConfirm from './modalConfirmPurchase';

describe('Component Modal Confirma', () => {
	test('test Snapshot', () => {
		const tree = renderer.create(<ModalConfirm />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
