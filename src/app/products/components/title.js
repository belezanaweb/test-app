import React from "react";
import { View, Text } from "react-native";

export default ({ message, size = 17, styled }) => {
  const style = getStyle(size);

  return (
    <View style={[style.container, styled]}>
      <Text style={style.message}>{message}</Text>
    </View>
  );
};

const getStyle = size => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  message: {
    color: "#000",
    fontWeight: "700",
    fontSize: size
  }
});
