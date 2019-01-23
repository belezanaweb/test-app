export const substr = (str, length = 15) => {
  if (str && str.length > length) {
    return `${str.substr(0, length)} ...`;
  }
  return str;
};

export const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const formatCurrency = (number, currency = 'pt-br') => {
  if (!number) {
    return 0;
  }
  return `R$ ${parseFloat(number)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d{3})+\,)/g, '$1.')}`;
};

export const htmlStrip = str => {
  return str.replace(/(<([^>]+)>)/gi, '');
};
