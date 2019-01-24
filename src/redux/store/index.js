import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import promise from "redux-promise";
import reducers from "../reducers";

export default () => {
  const createStoreWithMiddleware = applyMiddleware(promise, thunk);
  const store = createStoreWithMiddleware(createStore)(reducers);
  return store;
};
