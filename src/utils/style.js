import styled from 'styled-components';
import colors from './colors';

export const Container = styled.SafeAreaView`
	flex: 1;
	background: ${colors.whiteF8};
`;

export const ContainerScroll = styled.ScrollView`
	flex: 1;
`;

export const ContainerWrapper = styled.View`
	padding: 0px 20px;
`;

export const ContainerLoading = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background: rgba(255, 255, 255, 5);
`;

export const TextPriceScratched = styled.Text`
	color: ${colors.greyMedium};
	font-size: ${props => (props.size ? props.size : '11px')};
	line-height: 13px;
	font-family: 'Roboto-Regular';
	text-decoration: line-through;
	text-decoration-color: ${colors.greyMedium};
`;
