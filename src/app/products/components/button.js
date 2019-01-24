import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default ({ message, isFilled, onPress }) => {
  const style = getStyle(isFilled);

  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <Text style={style.message}>{message}</Text>
    </TouchableOpacity>
  );
};

const getStyle = isFilled => ({
  container: {
    width: "100%",
    height: 45,
    borderWidth: 2,
    borderColor: "#ff6c00",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: isFilled ? "#ff6c00" : "#fff"
  },
  message: {
    color: isFilled ? "#fff" : "#ff6c00",
    fontWeight: "700"
  }
});
