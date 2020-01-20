import React, { Component } from 'react';
import { Image } from 'react-native';
import { ContainerHeader, TextHeader, BtnClose } from './style';

const Header = ({ name, close, onPress }) => (
	<ContainerHeader>
		<TextHeader>{name}</TextHeader>
		{close && (
			<BtnClose onPress={onPress}>
				<Image
					resizeMode="cover"
					style={{ width: 20, height: 20 }}
					source={require('../../assets/images/icon_close.png')}
				/>
			</BtnClose>
		)}
	</ContainerHeader>
);

export default Header;
