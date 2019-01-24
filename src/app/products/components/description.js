import React from "react";
import { View, Text, WebView, TouchableOpacity } from "react-native";

import HTML from "react-native-render-html";

import Title from "./title";

export default ({ details: { description } }) => {
  const style = getStyle();

  return (
    <View style={style.container}>
      <Title
        message={"Descrição do Produto"}
        styled={{ alignItems: "flex-start" }}
      />
      <HTML html={description} />
    </View>
  );
};

const getStyle = () => ({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "center"
  }
});
