export interface ProductsProps {
  sku: string,
  name: string,
  maxPrice?: number,
  price: number,
  image: string,
  description: string,
  numberOfPayments: number,
  monthlyPayment: number,
  brand: string,
}
