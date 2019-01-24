import React, { PureComponent } from "react";
import { Text, FlatList, View } from "react-native";

import Title from "../../components/title";
import Button from "../../components/button";
import Card from "../../components/card";

class List extends PureComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.config = {
      page: 1,
      size: 3
    };

    this.state = {
      ready: true
    };

    this.loadMore();
  }

  loadMore = () => {
    const { ready } = this.state;
    const { actions } = this.props;

    if (ready) {
      this.setState({ ready: false });

      actions.getList(this.config.page, this.config.size).then(() => {
        this.config.page++;
        setTimeout(() => this.refList.scrollToEnd({ animated: true }), 1000);
        this.setState({ ready: true });
      });
    }
  };

  keyExtractor = key => key;

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return <Card sku={item} navigation={navigation} />;
  };

  render() {
    const { order } = this.props;
    const style = getStyle();

    return (
      <View style={style.container}>
        <Title message={"LISTA DE PRODUTOS"} />
        <FlatList
          ref={ref => (this.refList = ref)}
          style={style.flatlist}
          keyExtractor={this.keyExtractor}
          data={order}
          renderItem={this.renderItem}
        />
        <View style={style.button}>
          <Button
            message={"CARREGAR MAIS PRODUTOS"}
            onPress={this.loadMore}
            isFilled={false}
          />
        </View>
      </View>
    );
  }
}

const getStyle = () => ({
  container: {
    flex: 1,
    backgroundColor: "#EEEEEE"
  },
  flatlist: {
    width: "100%",
    height: "80%"
  },
  button: {
    marginBottom: 10,
    marginHorizontal: 10
  }
});

export default List;
