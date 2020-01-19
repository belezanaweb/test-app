import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { Container, ContainerScroll, ContainerWrapper } from '../../utils/style';
import Header from '../../components/header';
import CardProducts from '../../components/cardProducts';

export default class ProductsScreen extends Component {
	render() {
		const { navigate } = this.props.navigation;

		const dados = [
			{
				img: 'teste',
				cod: '2343243',
				desc: 'asdsaudhauh aspdoksaodpksa lllap asdasdsa oapaoasds',
				value: '23,40',
			},
			{
				img: 'teste2',
				cod: '123434',
				desc: 'asdsaudhauh aspdoksaodpksa lllap asdasdsa aaaa',
				value: '23,50',
			},
			{
				img: 'teste2',
				cod: '999999',
				desc: 'asdsaudhauh aspdoksaodpksa lllap asdasdsa aaaa asdasdsa aaaa asdasdsa aaaa',
				value: '23,50',
			},
		];

		return (
			<Container>
				<Header name="Home" />

				<ContainerScroll>
					<ContainerWrapper>
						<CardProducts />
					</ContainerWrapper>
				</ContainerScroll>
			</Container>
		);
	}
}
