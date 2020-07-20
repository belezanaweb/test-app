export const formatPrice = (currency: string, value: number) => {
  const formatters = {
    'BRL': (val: number) => {
      let num: any = val.toFixed(2).split('.');
      num[0] = 'R$ ' + num[0].split(/(?=(?:...)*$)/).join('.');
  
      return num.join(',').replace('.,', ',');
    },
    'USD': (val: number) => {
      let num: any = val.toFixed(2).split('.');
      num[0] = '$ ' + num[0].split(/(?=(?:...)*$)/).join('.');
  
      return num.join('.');
    }
  }

  if (currency === 'BRL') {
    return formatters['BRL'](value);
  }

  else if (currency === 'USD') {
    return formatters['USD'](value);
  }

  return formatters['USD'](value);
}

export const stripSpecialChars = (str: string) => {
  return str.replace(/[^a-z0-9]/gi,'');
}

export const stripHTMLTags = (str: string) => {
  return str.replace(/(<([^>]+)>)/ig, '').replace(/&nbsp;/ig, '').trim();
}
