import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const CardContainer = styled.View`
	width: 100%;
	background: ${Colors.white};
	flex-direction: column;
	border-radius: 5px;
	padding: 10px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
	margin-bottom: 10px;
`;

export const TitleDesc = styled.Text`
	font-family: 'Roboto-Regular';
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: ${Colors.black21};
`;

export const BoxImage = styled.View`
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const Box = styled.View`
	width: 100%;
	flex-direction: row;
`;

export const HalfBox = styled.View`
	align-items: ${props => props.align};
	width: 50%;
`;

export const TextPrice = styled.Text`
	font-family: 'Roboto-Regular';
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	color: ${Colors.orangeFF};
`;

export const TextPriceSplit = styled.Text`
	font-family: 'Roboto-Regular';
	font-weight: normal;
	font-size: 17px;
	line-height: 20px;
	color: ${Colors.greyMediumBold};
`;

export const TextBrand = styled.Text`
	font-family: 'Roboto-Regular';
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 24px;
	text-align: right;
	color: ${Colors.black21};
`;

export const TextCod = styled.Text`
	font-family: 'Roboto-Regular';
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 16px;
	text-align: right;
	color: ${Colors.greyLight};
`;

export const TextTitleDesc = styled.Text`
	font-family: 'Roboto-Regular';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: 0.307692px;
	color: ${Colors.black21};
`;
