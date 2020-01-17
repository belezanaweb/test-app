import React, { Component } from 'react'
import { ContainerHeader, TextHeader } from './style'

const Header = ({ name }) => (
	<ContainerHeader>
		<TextHeader>{name}</TextHeader>
	</ContainerHeader>
)

export default Header
