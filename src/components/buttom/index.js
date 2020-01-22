import React from 'react';
import { ContainerButton, TextButtom } from './style';

const ButtomProject = ({ name, onPress, margin, outline, background }) => (
	<ContainerButton
		onPress={onPress}
		margin={margin}
		outline={outline}
		background={background}
		testID="input-component"
	>
		<TextButtom outline={outline} background={background}>
			{name}
		</TextButtom>
	</ContainerButton>
);

export default ButtomProject;
