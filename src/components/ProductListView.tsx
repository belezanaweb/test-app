import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider, BaseScrollView } from "recyclerlistview";
import Touchable from 'react-native-touchable-safe';
import { ThemeColors, ThemeStyles } from '../theme/Theme';
import { ProductProps } from '../types/Types';
// @ts-ignore
import Image from 'react-native-image-placeholder';

const PicturePlaceholder = require('../assets/img/picture-placeholder.png');
const deviceWidth = Dimensions.get('window').width;

const itemHeight = 180;

const ProductListView = (props: any) => {
  const { data, onPressView, onPressMore } = props;

  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2
    })
  );

  const [layoutProvider] = useState(
    new LayoutProvider(
      (index) => 1,
      (type, dim) => {
        dim.width = deviceWidth - 26
        dim.height = itemHeight
      }
    )
  );

  useEffect(() => {
    setDataProvider((prevState) => prevState.cloneWithRows(data))
  }, [data]);

  const rowRenderer = (type: any, item: ProductProps, index: number) => {
    const picture = item?.picture?.medium || item?.picture?.large;

    return (
      <View style={styles.product}>
        <View style={styles.productLeftSide}>
          <Image
            style={styles.productPicture}
            loadingStyle={{ size: 'large', color: '#009e9e' }}
            source={!!picture ? { uri: picture } : PicturePlaceholder}
            placeholderSource={PicturePlaceholder}
            customImagePlaceholderDefaultStyle={styles.productPlaceholderPicture}
          />

          <Text style={styles.productSKU} numberOfLines={1}>cod: { item.sku }</Text>
        </View>

        <View style={styles.productRightSide}>
          <Text style={styles.productName} numberOfLines={3}>{ item.name }</Text>

          <View style={styles.productPriceContainer}>
            { item.maxPrice &&
              <Text style={styles.productMaxPrice} numberOfLines={1}>{ item.maxPrice }</Text>
            }

            <Text style={styles.productPrice} numberOfLines={1}>{ item.price }</Text>
          </View>

          <Touchable onPress={() => onPressView(item)} testID='ViewProduct'>
            <View style={ThemeStyles.solidButton.container}>
              <Text style={ThemeStyles.solidButton.text}>Ver Detalhes</Text>
            </View>
          </Touchable>
        </View>
      </View>
    )
  }

  const renderFooter = () => {
    return (
      <View style={styles.footerContainer}>
        <Touchable onPress={onPressMore} testID='MoreProducts'>
          <View style={ThemeStyles.outlinedButton.container}>
            <Text style={ThemeStyles.outlinedButton.text}>Carregar mais produtos</Text>
          </View>
        </Touchable>
      </View>
    )
  }

  return(
    <RecyclerListView
      style={{ flex: 1 }}
      layoutProvider={layoutProvider}
      dataProvider={dataProvider}
      rowRenderer={rowRenderer}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
      renderFooter={renderFooter}
    />
  )
}

ProductListView.defaultProps = {
  data: [],
  onPressView: () => {},
  onPressMore: () => {},
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 40,
    paddingLeft: 14,
  },
  footerContainer: {
    paddingTop: 5,
    width: deviceWidth - 26,
  },
  product: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 12,
    height: 170,
    backgroundColor: '#fff',
    borderRadius: 4,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    overflow: 'hidden',
  },
  productPlaceholderPicture: {
    width: 80,
    height: 80,
    backgroundColor: '#fff'
  },
  productLeftSide: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productPicture: {
    width: 100,
    height: 100,
  },
  productSKU: {
    color: ThemeColors.lightGray,
    justifyContent: 'center',
    marginTop: 10,
  },
  productRightSide: {
    flex: 4,
    marginLeft: 14,
    maxWidth: '100%',
  },
  productName: {
    color: '#000',
    fontSize: 14,
    marginLeft: 1,
  },
  productPriceContainer: {
    marginTop: 6,
  },
  productMaxPrice: {
    color: ThemeColors.mediumGray,
    fontSize: 13,
    marginTop: 2,
    textDecorationLine: 'line-through',
  },
  productPrice: {
    color: ThemeColors.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ProductListView;
