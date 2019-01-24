import React, { PureComponent } from "react";
import { View, Text, TextInput } from "react-native";

import Button from "../../components/button";
import Title from "../../components/title";
import Image from "../../components/image";

class Modal extends PureComponent {
  static navigationOptions = {
    header: null
  };

  confirmModal = () => {
    this.props.navigation.popToTop();
  };

  cancelModal = () => {
    this.props.navigation.pop();
  };

  render() {
    const { haveProduct, imageObjects } = this.props.navigation.state.params;
    const style = getStyle();

    return (
      <View style={style.container}>
        {haveProduct && (
          <Title message={"Confirma a adição do produto no seu carrinho?"} />
        )}

        {haveProduct && (
          <View style={{ flex: 1, width: "60%", minHeight: 200 }}>
            <Image
              imageObjects={imageObjects}
              size={"extralarge"}
              width={"100%"}
            />
          </View>
        )}

        {!haveProduct && (
          <Title
            message={
              "Preencha os campos abaixo para ser avisado quando o produto chegar!"
            }
          />
        )}

        {!haveProduct && (
          <View
            style={{
              flex: 3,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TextInput placeholder={"Coloque seu Nome"} />
            <TextInput placeholder={"Coloque seu Email"} />
          </View>
        )}
        <View style={style.contentButton}>
          <Button
            isFilled={true}
            message={"CONFIRMAR"}
            onPress={this.confirmModal}
          />
          <View style={{ padding: 5 }} />
          <Button
            isFilled={false}
            message={"CANCELAR"}
            onPress={this.cancelModal}
          />
        </View>
      </View>
    );
  }
}

const getStyle = size => ({
  container: {
    flex: 1,
    alignItems: "center"
  },
  message: {
    color: "#000",
    fontWeight: "700",
    fontSize: size
  },
  contentButton: {
    flex: 1,
    width: "100%",
    padding: 10,
    justifyContent: "center"
  }
});

export default Modal;
