export const formatReal: string | any= (int: number) =>
  int.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
