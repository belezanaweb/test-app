import React, { PureComponent } from "react";
import { Text, View } from "react-native";

import Image from "../image";
import Button from "../button";
import Price from "../price";

class Card extends PureComponent {
  goToDetail = () => {
    const { sku } = this.props;
    this.props.navigation.navigate("Detail", { sku });
  };

  render() {
    const { name, sku, imageObjects, priceSpecification } = this.props.product;
    const style = getStyle();

    return (
      <View style={style.container}>
        <View style={style.contentLeft}>
          <Image imageObjects={imageObjects} size={"large"} />
          <Text style={style.cod}>cod: {sku}</Text>
        </View>
        <View style={style.contentRight}>
          <Text style={style.name}>{name}</Text>
          <Price priceSpecification={priceSpecification} />
          <Button
            message={"VER DETALHES"}
            onPress={this.goToDetail}
            isFilled={true}
          />
        </View>
      </View>
    );
  }
}

const getStyle = () => ({
  container: {
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    padding: 5,
    backgroundColor: "#ffffff",
    height: 200,
    elevation: 3
  },
  contentLeft: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  contentRight: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  name: {
    color: "#000",
    fontWeight: "400",
    textAlign: "left"
  },
  cod: {
    color: "#cecece"
  }
});

export default Card;
