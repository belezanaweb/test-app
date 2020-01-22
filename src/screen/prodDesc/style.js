import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const CardContainer = styled.View`
	width: 100%;
	background: ${Colors.white};
	flex-direction: column;
	border-radius: 5px;
	padding: 5px;
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
