import React, { PureComponent } from "react";
import { Text, View, ScrollView } from "react-native";

import Image from "../../components/image";
import Title from "../../components/title";
import Price from "../../components/price";
import Button from "../../components/button";
import Description from "../../components/description";

class Detail extends PureComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.load();
  }

  goToModal = (haveProduct, imageObjects) => {
    this.props.navigation.navigate("Modal", { haveProduct, imageObjects });
  };

  load() {
    const { product, actions } = this.props;
    actions.get(product.sku);
  }

  render() {
    const {
      name,
      imageObjects,
      priceSpecification,
      details,
      sku,
      brand,
      inventory
    } = this.props.product;
    const style = getStyle();

    let haveProduct = inventory.quantity > 0;

    return (
      <ScrollView>
        <View style={style.container}>
          <Title message={"DETALHES DO PRODUTO"} />
          <View style={style.card}>
            <Text style={style.name}>{name}</Text>
            <View style={{ flex: 1, width: "60%", minHeight: 200 }}>
              <Image
                imageObjects={imageObjects}
                size={"extralarge"}
                width={"100%"}
              />
            </View>
            <View style={style.info}>
              <Price
                priceSpecification={priceSpecification}
                onInstallments={true}
              />
              <View style={style.infoRight}>
                <Text style={style.brand}>{brand.name}</Text>
                <Text style={style.cod}>cod: {sku}</Text>
              </View>
            </View>
            <Button
              message={haveProduct ? "COMPRE" : "AVISE-ME"}
              onPress={() => this.goToModal(haveProduct, imageObjects)}
              isFilled={haveProduct}
            />
            <Description details={details} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const getStyle = () => ({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#EEEEEE"
  },
  card: {
    flex: 1,
    minHeight: "85%",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#ffffff",
    elevation: 3,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  name: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 24,
    maxWidth: "99%",
    padding: 10
  },
  info: {
    width: "100%",
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  infoRight: {
    alignItems: "flex-end"
  },
  brand: {
    color: "#000000",
    fontSize: 23,
    fontWeight: "500"
  },
  cod: {
    color: "#cecece"
  }
});

export default Detail;
