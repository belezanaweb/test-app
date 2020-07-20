import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import Touchable from 'react-native-touchable-safe';
import { ThemeStyles } from '../theme/Theme';
import { ProductProps } from '../types/Types';
// @ts-ignore
import ProductListItem from './ProductListItem';

const deviceWidth = Dimensions.get('window').width;
const itemHeight = 180;

const ProductListView = (props: any) => {
  const { data, onPressView, onPressMore, visiblePaginator } = props;

  /* istanbul ignore next */
  const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => {
      return r1 !== r2
    })
  );

  /* istanbul ignore next */
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

  /* istanbul ignore next */
  const rowRenderer = (type: any, item: ProductProps, index: number) => {
    return (
      <ProductListItem
        product={item}
        onPress={onPressView}
        showButton={true}
        buttonLabel='Ver Detalhes'
      />
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
      renderFooter={visiblePaginator ? renderFooter : () => null}
      testID='ProductList'
    />
  )
}

ProductListView.defaultProps = {
  data: [],
  onPressView: /* istanbul ignore next */ () => {},
  onPressMore: /* istanbul ignore next */ () => {},
  visiblePaginator: true,
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
});

export default ProductListView;
