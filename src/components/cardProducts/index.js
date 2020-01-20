import React, { Component } from 'react';
import { Image } from 'react-native';
import Numeral from 'numeral';
import 'numeral/locales/pt-br';
import { isEmpty } from 'lodash';
import ButtomProject from '../buttom';
import { CardContainer, BoxLeft, BoxRight, TextDesc, TextPrice, BoxPrices, TextCod } from './style';
import { TextPriceScratched } from '../../utils/style';
import Colors from '../../utils/colors';

const CardProducts = ({ data, navigate }) => {
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

				<TextCod>cod: {data.sku}</TextCod>
			</BoxLeft>
			<BoxRight>
				<TextDesc>{data.name}</TextDesc>

				<BoxPrices>
					<TextPriceScratched>
						{Numeral(data.priceSpecification.maxPrice).format('$0.00')}
					</TextPriceScratched>
					<TextPrice>{Numeral(data.priceSpecification.price).format('$0.00')}</TextPrice>
				</BoxPrices>
				<ButtomProject
					name="VER DETALHES"
					onPress={() => {
						navigate('ProdDescription', { cod: data.sku });
					}}
					background={Colors.orange}
				/>
			</BoxRight>
		</CardContainer>
	);
};
export default CardProducts;
