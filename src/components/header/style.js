import styled from 'styled-components';

export const ContainerHeader = styled.View`
	height: 40px;
	justify-content: center;
	flex-direction: row;
	align-items: center;
`;

export const TextHeader = styled.Text`
	font-family: 'Roboto-Medium';
	font-size: 14px;
	line-height: 16px;
	text-align: center;
	text-transform: uppercase;
	width: 100%;
`;

export const BtnClose = styled.TouchableOpacity`
	width: 10%;
	position: absolute;
	right: 0px;
`;
