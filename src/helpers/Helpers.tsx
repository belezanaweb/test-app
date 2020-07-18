export const formatPrice = (currency: string, value: number) => {
  const formatters = {
    'BRL': (val: number) => {
      let num: any = val.toFixed(2).split('.');
      num[0] = 'R$ ' + num[0].split(/(?=(?:...)*$)/).join('.');
  
      return num.join(',').replace('.,', ',');
    }
  }

  if (currency === 'BRL') {
    formatters['BRL'](value);
  }
}

