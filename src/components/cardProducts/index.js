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
import Numeral from 'numeral';
import 'numeral/locales/pt-br';
import { isEmpty } from 'lodash';
import ButtomProject from '../buttom';

const CardProducts = ({ data }) => {
	Numeral.locale('pt-br');
	const thumbnail = data.imageObjects.filter(item => item.featured);
	return (
		<CardContainer>
			<BoxLeft>
				{!isEmpty(thumbnail) ? (
					<Image
						resizeMode="cover"
						style={{ width: 108, height: 108 }}
						source={{
							uri: thumbnail[0].imageUrl,
						}}
					/>
				) : null}

				<TextCod>cod: 54417</TextCod>
			</BoxLeft>
			<BoxRight>
				<TextDesc>{data.name}</TextDesc>

				<BoxPrices>
					<TextPriceScratched>
						{Numeral(data.priceSpecification.maxPrice).format('$0.00')}
					</TextPriceScratched>
					<TextPrice>{Numeral(data.priceSpecification.price).format('$0.00')}</TextPrice>
				</BoxPrices>
				<ButtomProject name="VER DETALHES" />
			</BoxRight>
		</CardContainer>
	);
};
export default CardProducts;
