import { StyleSheet } from 'react-native';
import margin from '../../../styles/sizes';
import {
  darkOrange, grey, lightGrey, darkGrey,
} from '../../../styles/color';

const textDiscountCommon = {
  // fontFamily: "Roboto",
  fontStyle: 'normal',
  fontWeight: 'normal',
  left: 0,
  position: 'absolute',
  textDecorationLine: 'line-through',
  top: 0,
};
const textPriceCommon = {
  // fontFamily: "Roboto",
  color: darkOrange,
  fontStyle: 'normal',
  fontWeight: 'bold',
  left: 0,
  position: 'absolute',
};
const styles = StyleSheet.create({
  containerBig: {
    position: 'relative',
    top: 23,
  },
  containerSmall: {
    left: margin,
    position: 'absolute',
    top: 55,
  },
  textDiscountBig: {
    ...textDiscountCommon,
    color: lightGrey,
    fontSize: 14,
    height: 18,
    lineHeight: 18,
  },
  textDiscountSmall: {
    ...textDiscountCommon,
    color: grey,
    // fontFamily: 'Roboto',
    fontSize: 11,
    height: 13,
    // lineHeight: 'normal',
    textAlign: 'center',
    top: 0,
    width: 49,
  },
  textInstallmentsBig: {
    color: darkGrey,
    // fontFamily: "Roboto",
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 'normal',
    height: 20,
    lineHeight: 20,
    position: 'absolute',
    top: 45,
  },
  textInstallmentsSmall: {
    display: 'none',
  },
  textPriceBig: {
    ...textPriceCommon,
    fontSize: 24,
    lineHeight: 35,
  },
  textPriceSmall: {
    ...textPriceCommon,
    fontSize: 14,
    height: 17,
    // lineHeight: "normal",
  },
});

export const customText = (bool, view) => (bool
  ? {
    ...customTextPrice(view),
    top: 12,
  }
  : {
    ...customTextPrice(view),
    top: 5,
  });
export const customContainer = bool => (bool
  ? styles.containerBig
  : styles.containerSmall);
export const customTextDiscount = bool => (bool
  ? styles.textDiscountBig
  : styles.textDiscountSmall);
export const customTextPrice = bool => (bool
  ? styles.textPriceBig
  : styles.textPriceSmall);
export const customInstallments = bool => (bool
  ? styles.textInstallmentsBig
  : styles.textInstallmentsSmall);
