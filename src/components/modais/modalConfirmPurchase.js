import React from 'react';
import { View, Text } from 'react-native';
import { Container, ContainerScroll, ContainerWrapper } from '../../utils/style';

const modalConfirmPurchase = ({ data }) => {
	return (
		<Container>
			<ContainerScroll>
				<ContainerWrapper>
					<Text>Modal confirm</Text>
				</ContainerWrapper>
			</ContainerScroll>
		</Container>
	);
};
export default modalConfirmPurchase;
