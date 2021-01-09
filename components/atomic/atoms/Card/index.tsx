import React, { useEffect } from 'react';
import { View } from 'react-native';

type props = {
  flex?: number;
};
const Card: React.FC<props> = ({ flex = 0, children }): JSX.Element => (
  <View
    style={{
      flex,
      backgroundColor: 'white',
      shadowColor: '#000',
      padding: 15,
      width: '95%',
      borderRadius: 6,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    }}
  >
    {children}
  </View>
);

export default Card;
