import styled from 'styled-components';
import colors from '../../utils/colors';

export const CardContainer = styled.View`
	width: 100%;
	background: ${colors.white};
	flex-direction: row;
	border-radius: 5px;
	padding: 5px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	margin-bottom: 10px;
`;

export const BoxLeft = styled.View`
	width: 40%;
`;

export const BoxRight = styled.View`
	width: 60%;
`;

export const BoxPrices = styled.View`
	width: 100%;
	margin: 20px 0px;
`;

export const TextDesc = styled.Text`
	color: #212121;
	font-size: 12px;
	line-height: 14px;
	font-family: 'Roboto-Regular';
`;

export const TextPrice = styled.Text`
	color: ${colors.orange};
	font-size: 14px;
	line-height: 14px;
	font-family: 'Roboto-Bold';
`;

export const TextPriceScratched = styled.Text`
	color: ${colors.greyMedium};
	font-size: 11px;
	line-height: 13px;
	font-family: 'Roboto-Regular';
	text-decoration: line-through;
	text-decoration-color: ${colors.greyMedium};
`;

export const TextCod = styled.Text`
	color: ${colors.greyLight};
	font-size: 14px;
	line-height: 14px;
	font-family: 'Roboto-Regular';
	text-align: center;
	padding: 5px 0px;
`;
