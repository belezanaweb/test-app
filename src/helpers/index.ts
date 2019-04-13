export const formatReal: string | any = (mixed: number, pre = 'R$ ') => {
  let tmp = parseInt(mixed.toFixed(2).toString().replace(/[^\d]+/g, '')) + ''
  tmp = tmp.replace(/([0-9]{2})$/g, ',$1')
  if (tmp.length > 6)
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')

  return `${pre}${tmp}`
}
