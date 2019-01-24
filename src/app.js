import React from "react";
import { Provider } from "react-redux";

import Navigation from "./navigation";
import configureStore from "./redux/store";

export default props => (
  <Provider store={configureStore()}>
    <Navigation />
  </Provider>
);
