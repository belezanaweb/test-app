import React from 'react';
import { Image, Dimensions } from 'react-native';
import {
	CardContainer,
	TitleDesc,
	BoxImage,
	Box,
	HalfBox,
	TextPrice,
	TextPriceSplit,
	TextBrand,
	TextCod,
	TextTitleDesc,
} from './style';
import HTML from 'react-native-render-html';
import Numeral from 'numeral';
import 'numeral/locales/pt-br';
import ButtomProject from '../buttom';
import Colors from '../../utils/colors';
import { TextPriceScratched } from '../../utils/style';

const CardProductsDesc = ({ data }) => {
	Numeral.locale('pt-br');
	const thumbnail = data.imageObjects.filter(item => item.featured);
	const haveStock = data.inventory.quantity > 0;
	return (
		<CardContainer>
			<TitleDesc>{data.name}</TitleDesc>
			<BoxImage>
				<Image
					resizeMode="cover"
					style={{ width: 163, height: 163 }}
					source={{
						uri: thumbnail[0].imageUrl,
					}}
				/>
			</BoxImage>

			<Box>
				<HalfBox align="flex-start">
					<TextPriceScratched size="14">
						{Numeral(data.priceSpecification.originalPrice).format('$0.00')}
					</TextPriceScratched>
					<TextPrice>{Numeral(data.priceSpecification.price).format('$0.00')}</TextPrice>
					<TextPriceSplit>
						{data.priceSpecification.installments.numberOfPayments}x{' '}
						{Numeral(data.priceSpecification.installments.monthlyPayment).format('$0.00')}
					</TextPriceSplit>
				</HalfBox>
				<HalfBox align="flex-end">
					<TextBrand>{data.brand.name}</TextBrand>
					<TextCod>cod: {data.sku}</TextCod>
				</HalfBox>
			</Box>

			<ButtomProject
				name={haveStock ? 'COMPRE' : 'AVISE-ME'}
				margin="18px 0px"
				outline={haveStock ? false : true}
				background={Colors.orange}
			/>
			<TextTitleDesc>Descrição do Produto</TextTitleDesc>
			<HTML
				baseFontStyle={{
					fontSize: 12,
					color: Colors.gray77,
					lineHeight: 19,
					fontFamily: 'Roboto-Regular',
				}}
				html={data.details.description.replace('<br>', '')}
				imagesMaxWidth={Dimensions.get('window').width}
			/>
		</CardContainer>
	);
};
export default CardProductsDesc;
