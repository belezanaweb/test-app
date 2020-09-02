import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function Loading({navigation, name, size, color}) {
  return (
    <>
      <Icon name={name} size={size} color={color} />
    </>
  );
}

export default Loading;
