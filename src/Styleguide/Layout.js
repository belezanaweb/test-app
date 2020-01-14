import { Platform } from "react-native";
import Colors from "./Colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const Type = {
  body: {
    fontFamily: 'Trebuchet MS',
    backgroundColor: 'transparent',
    fontSize: 16,
    color: Colors.primary
  },
  wrapper: {
    paddingTop: getStatusBarHeight(),
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: Colors.primary,
    alignItems: 'center',
    padding: 20
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white
  },
};

export default {
  Type,
}
