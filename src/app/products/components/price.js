import React from "react";
import { View, Text } from "react-native";

const numeral = require("numeral");

const format = num => {
  return numeral(num)
    .format("0,000.00")
    .replace(".", "#")
    .replace(",", ".")
    .replace("#", ",");
};

export default ({ priceSpecification, onInstallments }) => {
  const style = getStyle();
  const { price, maxPrice, installments } = priceSpecification;
  const { monthlyPayment, numberOfPayments } = installments;

  return (
    <View style={style.container}>
      {price != maxPrice && (
        <Text style={style.maxPrice}>R$ {format(maxPrice)}</Text>
      )}
      <Text style={style.price}>R$ {format(price)}</Text>
      {onInstallments && (
        <Text style={style.installments}>
          {numberOfPayments}x de R$ {format(monthlyPayment)}
        </Text>
      )}
    </View>
  );
};

const getStyle = () => ({
  maxPrice: {
    fontSize: 15,
    textDecorationLine: "line-through",
    color: "#cecece"
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff6c00"
  },
  installments: {
    fontSize: 16
  }
});
