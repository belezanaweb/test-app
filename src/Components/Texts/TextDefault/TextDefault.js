import React from 'react';
import { TextDefaultComp } from './TextDefault.style';
import { Colors } from '../../../Styleguide';

const TextDefault = ({ text, color, fontSize, centered, letterSpacing }) => (
  <TextDefaultComp
    style={{
      color: color ? color : Colors.black,
      fontSize: fontSize ? fontSize : 14,
      textAlign: centered ? 'center' : 'left',
      letterSpacing: letterSpacing ? letterSpacing : 0,
    }}>
    {text ? text : ''}
  </TextDefaultComp>
);

export default TextDefault;
