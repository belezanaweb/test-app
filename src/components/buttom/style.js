import styled from 'styled-components';
import Colors from '../../utils/colors';

export const ContainerButton = styled.TouchableOpacity`
	width: 100%;
	background: ${props => (props.outline ? 'transparent' : props.background)};
	border-radius: 4px;
	padding: 10px 0px;
	margin: ${props => (props.margin ? props.margin : '0px')};
	border-color: ${props => (props.outline ? props.background : 'transparent')};
	border-width: 2;
`;

export const TextButtom = styled.Text`
	font-family: 'Roboto-Bold';
	font-size: 14px;
	line-height: 16px;
	text-align: center;
	text-transform: uppercase;
	color: ${props => (props.outline ? props.background : Colors.white)};
`;
