export const formatPrice = (currency: string, value: number) => {
  const formatters = {
    'BRL': (val: number) => {
      let num: any = val.toFixed(2).split('.');
      num[0] = 'R$ ' + num[0].split(/(?=(?:...)*$)/).join('.');
  
      return num.join(',').replace('.,', ',');
    }
  }

  if (currency === 'BRL') {
    return formatters['BRL'](value);
  }
}

export const stripSpecialChars = (str: string) => {
  return str.replace(/[^a-z0-9]/gi,'');
}
