import React, { Component } from 'react';
import {
	CardContainer,
	BoxLeft,
	BoxRight,
	TextDesc,
	TextPrice,
	BoxPrices,
	TextPriceScratched,
	TextCod,
} from './style';

import { Image } from 'react-native';
import ButtomProject from '../buttom';

const CardProducts = () => (
	<CardContainer>
		<BoxLeft>
			<Image resizeMode="cover" source={require('../../assets/images/imgProd.png')} />
			<TextCod>cod: 54417</TextCod>
		</BoxLeft>
		<BoxRight>
			<TextDesc>
				Good Girl Velvet Fatale Carolina Herrera Eau de Parfum - Perfume Feminino 80ml
			</TextDesc>

			<BoxPrices>
				<TextPriceScratched>R$ 30,00</TextPriceScratched>
				<TextPrice>R$ 30,00</TextPrice>
			</BoxPrices>
			<ButtomProject />
		</BoxRight>
	</CardContainer>
);

export default CardProducts;
