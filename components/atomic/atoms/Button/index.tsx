import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from '../Text';

type props = {
  title: string;
  type?: 'primary' | 'secundary';
  onPress: () => void;
  style?: any;
};

const Button: React.FC<props> = ({
  title,
  onPress,
  type = 'primary',
  style,
}): JSX.Element => {
  const styleByType: any = {
    primary: {
      colorText: '#fff',
      style: {
        backgroundColor: '#FF6C00',
        padding: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    secundary: {
      colorText: '#FF6C00',
      style: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#FF6C00',
        borderWidth: 3,
      },
    },
  };
  return (
    <TouchableOpacity
      style={[styleByType[type].style, style]}
      onPress={onPress}
    >
      <Text color={styleByType[type].colorText} size={20} fontWeight="700">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
