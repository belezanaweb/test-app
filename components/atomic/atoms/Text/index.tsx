import React from 'react';
import { Text, Platform } from 'react-native';

type textProps = {
  size?: number;
  color?: string;
  lineThrough?: boolean;
  fontWeight?:
    | '400'
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
};

const TextElement: React.FC<textProps> = ({
  size = 12,
  fontWeight = '400',
  color,
  lineThrough,
  children,
}): JSX.Element => (
  <Text
    numberOfLines={5}
    ellipsizeMode="tail"
    style={{
      fontSize: size,
      fontWeight,
      color,
      fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
      textDecorationLine: lineThrough ? 'line-through' : 'none',
    }}
  >
    {children}
  </Text>
);

export default TextElement;
