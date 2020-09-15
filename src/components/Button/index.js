import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container, Title} from './styles';

const Button = ({title, loading, onPress, inverse}) => {
  return (
    <Container onPress={onPress} inverse={inverse}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Title inverse={inverse}>{title}</Title>
      )}
    </Container>
  );
};

export default Button;
