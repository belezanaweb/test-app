import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { isEmpty } from 'lodash';
import axios from 'axios';
import Colors from '../../utils/colors';
import Header from '../../components/header';
import CardProductsDesc from '../../components/cardProductsDesc';
import { Container, ContainerScroll, ContainerWrapper, ContainerLoading } from '../../utils/style';

export default class ProdDescription extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: false,
			error: false,
		};
	}

	componentWillMount() {
		this.callApi();
	}

	callApi = async () => {
		this.setState({ isLoading: true });
		const { cod } = this.props.navigation.state.params;
		await axios
			.get(`https://pacific-wave-51314.herokuapp.com/products/${cod}`)
			.then(({ data }) => {
				console.log('valor de response =>', data);
				this.setState({ data: data, isLoading: false });
			})
			.catch(error => {
				console.log(error);
				this.setState({ error: true, isLoading: false });
			});
	};

	render() {
		const { isLoading, data } = this.state;

		return (
			<Container>
				<Header name="Lista de produtos" />

				{isLoading && (
					<ContainerLoading>
						<ActivityIndicator size="large" color={Colors.orange} />
					</ContainerLoading>
				)}

				<ContainerScroll>
					<ContainerWrapper>{!isEmpty(data) && <CardProductsDesc data={data} />}</ContainerWrapper>
				</ContainerScroll>
			</Container>
		);
	}
}
