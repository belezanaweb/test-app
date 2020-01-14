import React, { Component } from 'react';
import { useSelector } from 'react-redux'

import {
  Wrapper,
  MainTitle,
} from './Main.style';

class Main extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Wrapper>
          <MainTitle>Olá</MainTitle>
        </Wrapper>
      </>
    )
  }
}

export default Main;
