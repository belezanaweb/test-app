import React from 'react';
import { Text, Platform, StyleProp } from 'react-native';

type textProps = {
  size?: number;
  color?: string;
  lineThrough?: boolean;
  numberOfLines?: number;
  style?: StyleProp<any>;
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
  numberOfLines = 5,
  style,
  children,
}): JSX.Element => (
  <Text
    numberOfLines={numberOfLines}
    ellipsizeMode="tail"
    style={[
      {
        fontSize: size,
        fontWeight,
        color,
        fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : 'Roboto',
        textDecorationLine: lineThrough ? 'line-through' : 'none',
      },
      style,
    ]}
  >
    {children}
  </Text>
);

export default TextElement;
