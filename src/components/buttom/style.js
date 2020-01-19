import styled from 'styled-components';
import Colors from '../../utils/colors';

export const ContainerButton = styled.TouchableOpacity`
	width: 100%;
	background: ${Colors.orange};
	border-radius: 4px;
	padding: 10px 0px;
`;

export const TextButtom = styled.Text`
	font-family: 'Roboto-Bold';
	font-size: 14px;
	line-height: 16px;
	text-align: center;
	text-transform: uppercase;
	color: ${Colors.white};
`;
