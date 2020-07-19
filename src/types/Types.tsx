export interface ProductProps {
  sku: string,
  name: string,
  maxPrice?: string,
  price: string,
  picture: any,
}

export interface ProductAllProps extends ProductProps {
  gallery: any,
  description: string,
  numberOfPayments: number,
  monthlyPayment: string,
  brand: string,
  inventory: number,
}
