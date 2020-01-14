import React from 'react';
import { MainTitleComp } from './MainTitle.style';
import { Colors } from '../../../Styleguide';

const MainTitle = ({ text, color, fontSize, centered, letterSpacing, striked }) => (
  <MainTitleComp
    style={{
      color: color ? color : Colors.black,
      fontSize: fontSize ? fontSize : 14,
    }}>
    {text ? text : ''}
  </MainTitleComp>
);

export default MainTitle;
