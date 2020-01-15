import React from 'react';
import { TextDefaultComp } from './TextDefault.style';
import { Colors } from '../../../Styleguide';

const TextDefault = ({ text, color, fontSize, centered, letterSpacing, striked, marginBottom, marginTop }) => (
  <TextDefaultComp
    style={{
      color: color ? color : Colors.black,
      fontSize: fontSize ? fontSize : 14,
      textAlign: centered ? 'center' : 'left',
      letterSpacing: letterSpacing ? letterSpacing : 0,
      textDecorationLine: striked ? 'line-through': null,
      marginBottom: marginBottom ? marginBottom : 0,
      marginTop: marginTop ? marginTop : 0,
    }}>
    {text ? text : ''}
  </TextDefaultComp>
);

export default TextDefault;
