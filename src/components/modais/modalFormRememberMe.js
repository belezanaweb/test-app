import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Container, ContainerScroll, ContainerWrapper, InputText } from '../../utils/style';
import colors from '../../utils/colors';
import ButtomProject from '../buttom';

const modalFormRemember = ({ data }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const sendRegister = () => {
		const data = {
			name,
			email,
		};
		console.log(data);
	};

	return (
		<Container>
			<ContainerScroll>
				<ContainerWrapper>
					<Text>Preencha esse formulário para ser avisado quando o produto estiver em estoque</Text>
					<InputText
						placeholder="Digite seu nome"
						onChangeText={text => {
							setName(text);
						}}
					/>
					<InputText
						placeholder="Digite seu e-mail"
						onChangeText={text => {
							setEmail(text);
						}}
					/>
					<ButtomProject
						name="Enviar"
						onPress={() => {
							sendRegister();
						}}
						margin="20px 0px"
						background={colors.orangeFF}
					/>
				</ContainerWrapper>
			</ContainerScroll>
		</Container>
	);
};
export default modalFormRemember;
