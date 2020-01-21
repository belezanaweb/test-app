import React from 'react';
import { View, Text, Image } from 'react-native';
import { Container, ContainerScroll, ContainerWrapper } from '../../utils/style';
import { BoxImg, TextSuccess } from './style';

const modalConfirmPurchase = () => {
	return (
		<Container>
			<ContainerScroll>
				<ContainerWrapper>
					<BoxImg>
						<Image
							resizeMode="cover"
							style={{ width: 163, height: 163 }}
							source={require('../../assets/images/icon_success.png')}
						/>
					</BoxImg>
					<TextSuccess>Seu produto foi adicionado com sucesso á sacola</TextSuccess>
				</ContainerWrapper>
			</ContainerScroll>
		</Container>
	);
};
export default modalConfirmPurchase;
