import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { ImageProduct } from '../image/image-view';
import { Code } from '../code/code-view';
import { Title } from '../title/title-view';
import { Price } from '../price/price-view';
import { Button } from '../../button/button-view';
import margin from '../../../styles/sizes';
import { Description } from '../description/description-view';
import { white, purple } from '../../../styles/color';
import setItem from '../../../redux/actions/actions';

const returnStock = stock => ((stock > 0)
  ? 'compre'
  : 'avise-me');
const returnType = (type, stock) => {
  if (type || (stock > 0)) {
    return true;
  }
  return false;
};

export class ProductContainer extends Component {
  render() {
    const {
      element, view,
    } = this.props;

    const productAction = () => {
      const result = view ? {} : element;
      setItem({ ...result, type: false });
    };

    return (
      <View style={customHeight(view)}>
        <View style={customPadding(view)}>
          <Title view={view} text={element.title} />
          <ImageProduct view={view} url={element.url} />
          <Code text="cod: 54417" view={view} name={element.name} />
          <Price
            view={view}
            text={element.price}
            discount={element.discount}
            installments={element.installments}
          />
          <View
            style={view ? { top: 40 } : { display: 'none' }}
          >
            <Description text={element.description} />
            <View style={styles.viewRead}>
              <Text style={styles.textRead}>Continuar Lendo</Text>
              <View
                style={{
                  position: 'absolute',
                  right: -10,
                  top: -1,
                }}
              >
                <Icon name="chevron-down" type="evilicon" color={purple} size={40} />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={customButtonView(view)}
            onPress={() => { productAction(); }}
          >
            <Button
              type={returnType(element.type, element.stock)}
              text={element.type ? 'Ver Detalhes' : returnStock(element.stock)}
            />
          </TouchableOpacity>
          <View />
        </View>
      </View>
    );
  }
}

ProductContainer.propTypes = {
  element: PropTypes
    .shape({
      description: PropTypes.string,
      discount: PropTypes.string,
      installments: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.string,
      stock: PropTypes.bool,
      title: PropTypes.string,
      type: PropTypes.bool,
      url: PropTypes.string,
    })
    .isRequired,
  view: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  buttonViewBig: {
    position: 'absolute',
    right: 0,
    top: 360,
    width: '100%',
  },
  buttonViewSmall: {
    bottom: 0,
    position: 'absolute',
    right: 0,
    width: '100%',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    marginTop: 10,
    padding: 5,
    position: 'relative',
    shadowColor: '#000000',
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowOpacity: 0.2,
    width: '100%',
  },
  content: {
    paddingLeft: margin,
  },
  textRead: {
    color: purple,
    top: 5,
  },
  viewRead: {
    borderColor: white,
    borderTopWidth: 1,
    fontWeight: 'bold',
    height: 38,
    top: 115,
    width: '100%',
  },
});
const customHeight = bool => (bool
  ? {
    ...styles.container,
    height: 596,
  }
  : {
    ...styles.container,
    height: 145,
  });
const customPadding = bool => (bool
  ? {
    flex: 1,
    paddingLeft: 5,
  }
  : {
    flex: 1,
    paddingLeft: margin,
  });
const customButtonView = bool => (bool
  ? styles.buttonViewBig
  : styles.buttonViewSmall);

export default ProductContainer;
