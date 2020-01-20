import React from 'react';
import { View, Text } from 'react-native';
import { Container, ContainerScroll, ContainerWrapper } from '../../utils/style';

const modalFormRemember = ({ data }) => {
	return (
		<Container>
			<ContainerScroll>
				<ContainerWrapper>
					<Text>Modal form remember</Text>
				</ContainerWrapper>
			</ContainerScroll>
		</Container>
	);
};
export default modalFormRemember;
