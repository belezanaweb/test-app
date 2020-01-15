import { Dimensions } from 'react-native';
import RNFS from 'react-native-fs';
import moment from 'moment-timezone';
import { Alert } from 'react-native';
import Toast from 'react-native-root-toast';

export const breakpoints = {
  large: 414, // iPhone 7 Plus
  medium: 375, // Nexus 5, Samsung S8, iPhone 7...
  small: 320, // HTC Desire, S4 Mini, iPhone 5S...
};

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return {
    b: parseInt(result[3], 16),
    g: parseInt(result[2], 16),
    r: parseInt(result[1], 16),
  };
}

export function rgba(hex, opacity) {
  return `rgba(${hexToRgb(hex).r}, ${hexToRgb(hex).g}, ${hexToRgb(hex).b}, ${opacity})`;
}

export function capitalizeAllStrings(value) {
  return value
    .split(' ')
    .map(item => capitalize(item))
    .join(' ');
}

export function capitalize(value, isLowerCase = true, withSpace = true) {
  if (!value) return '';

  const newString = string => {
    if (string.length === 0) return '';

    const stringSliced = isLowerCase ? string.slice(1).toLowerCase() : string.slice(1);

    return string[0].toUpperCase() + stringSliced;
  };

  return value
    .split(' ')
    .map(string => newString(string))
    .join(withSpace ? ' ' : '');
}

export const formatCpf = (cpf) => {
  if (!cpf) return null;

  return `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-${cpf.slice(-2)}`;
};

export const formatPhone = (phone) => {
  if (!phone) return null;

  const cleanPhone = phone.replace(/(\(|\)|-| )/g, '');
  const phoneLength = cleanPhone.length;

  if (phoneLength < 10) return cleanPhone;

  const firstPartEnd = phoneLength === 10 ? 6 : 7;

  const ddd = cleanPhone.slice(0, 2);
  const firstPart = cleanPhone.slice(2, firstPartEnd);
  const lastPart = cleanPhone.slice(-4);

  return `(${ddd}) ${firstPart}-${lastPart}`;
};

export const onlyNumbers = (value) => value && value.replace(/\D/g, '');

export function isScreenSizeAt(breakpoint) {
  return Dimensions.get('window').width <= breakpoint;
}

export function isURL(s) {
  // https://stackoverflow.com/a/1701911
  const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return regexp.test(s);
}

export function responsiveSize(size, minSize = null) {
  const newSize = Math.min(size, Math.max(size * (Dimensions.get('window').width / 375), minSize || 0));
  return Math.floor(newSize);
}

export function responsiveSizeVertical(size, minSize = null) {
  const newSize = Math.min(size, Math.max(size * (Dimensions.get('window').height / 667), minSize || 0));
  return Math.floor(newSize);
}

export const length = (a) => {
  if (!a) return 0;

  if (typeof a === 'object') return Object.keys(a).length;

  return a.length;
};

export const getLastElement = (a) => {
  const l = length(a);
  if (l === 0) return null;
  return a[l - 1];
};

export const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);

export const acceptOnlyLetters = (value) => {
  return value.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+/g, '');
};

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export function formatFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const cos = Math.cos;

// https://en.wikipedia.org/wiki/Haversine_formula
export function calculateDistanceBetweenCoords(
  point1,
  point2,
) {
  // Math.PI / 180
  const p = 0.017453292519943295;
  const a =
    0.5 -
    cos((point2.latitude - point1.latitude) * p) / 2 +
    cos(point1.latitude * p) * cos(point2.latitude * p) * (1 - cos((point2.longitude - point1.longitude) * p)) / 2;

  // 2 * R; R = 6371 km
  return 12742 * Math.asin(Math.sqrt(a));
}

export function getDate(value) {
  const [day, month, year] = value.split('/');

  return new Date(+year, +month - 1, +day);
}

export function getOffsetBetweenTimezones(tz1, tz2) {
  const now = moment.utc();
  const tz1Offset = getUtcOffsetForTimezone(tz1, now);
  const tz2Offset = getUtcOffsetForTimezone(tz2, now);
  return tz2Offset - tz1Offset;
}

export async function getBase64(imageUri) {
  const filepath = imageUri.split('//')[1];
  const imageUriBase64 = await RNFS.readFile(filepath, 'base64');

  return `data:image/jpeg;base64,${imageUriBase64}`;
}

export function isObjectId(id) {
  const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");

  return checkForHexRegExp.test(id);
}

export function showAlert(title, description) {
  Alert.alert(
    title,
    description,
    [
      {text: 'OK', onPress: () => {}},
    ],
    {cancelable: false},
  );
}

export function showToast(text) {
  return Toast.show(text, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
        // calls on toast\`s appear animation start
    },
    onShown: () => {
        // calls on toast\`s appear animation end.
    },
    onHide: () => {
        // calls on toast\`s hide animation start.
    },
    onHidden: () => {
        // calls on toast\`s hide animation end.
    }
  });
}

export function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function toBrazilianReal(value) {
  return value.toLocaleString('pt-br', {minimumFractionDigits: 2});
}
