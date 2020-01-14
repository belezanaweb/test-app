import React from 'react';
import { TextDefaultComp } from './TextDefault.style';
import { Colors } from '../../../Styleguide';

const TextDefault = ({ text, color, fontSize, centered, letterSpacing, striked }) => (
  <TextDefaultComp
    style={{
      color: color ? color : Colors.black,
      fontSize: fontSize ? fontSize : 14,
      textAlign: centered ? 'center' : 'left',
      letterSpacing: letterSpacing ? letterSpacing : 0,
      textDecorationLine: striked ? 'line-through': null,
    }}>
    {text ? text : ''}
  </TextDefaultComp>
);

export default TextDefault;
