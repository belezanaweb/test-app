import React, { Component } from 'react';
import { ContainerButton, TextButtom } from './style';

const ButtomProject = ({ name, onPress }) => (
	<ContainerButton onPress={onPress}>
		<TextButtom> {name} </TextButtom>
	</ContainerButton>
);

export default ButtomProject;
