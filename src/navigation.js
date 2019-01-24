import { createStackNavigator, createAppContainer } from "react-navigation";

import List from "./app/products/screens/list";
import Detail from "./app/products/screens/detail";
import Modal from "./app/products/screens/modal";

const AppNavigator = createStackNavigator({
  List: {
    screen: List
  },
  Detail: {
    screen: Detail
  },
  Modal: {
    screen: Modal
  }
});

export default createAppContainer(AppNavigator);
