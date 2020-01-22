import 'jest-styled-components';
// do not forget the /native at the end of the line.
import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import ProductsScreen from './index';

const createTestProps = props => ({
	navigation: {
		navigate: jest.fn(),
	},
	...props,
});

describe('Test state', () => {
	const props = createTestProps({});
	const HomeState = renderer.create(<ProductsScreen {...props} />).getInstance();

	test('Buttom Snapshot', () => {
		// console.log(HomeState);

		expect(HomeState.state.isLoading).toEqual(true);
		expect(HomeState.state.page).toEqual(1);
		expect(HomeState.state.data).toEqual([]);
		expect(HomeState.state.error).toEqual(false);
	});

	test('Test identify component', () => {
		const { getByTestId } = render(<ProductsScreen {...props} />);

		expect(getByTestId('productScreen')).toBeTruthy();
	});
});
