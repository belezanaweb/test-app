export const formatReal: string | any = (mixed: number, pre = 'R$ ') => {
  let int = parseInt(mixed.toFixed(2).toString().replace(/[^\d]+/g, ''))
  let tmp = int + ''
  tmp = tmp.replace(/([0-9]{2})$/g, ',$1')
  if (tmp.length > 6)
    tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, '.$1,$2')

  return `${pre}${tmp}`
}
